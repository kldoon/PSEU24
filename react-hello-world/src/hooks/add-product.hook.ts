import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import validator from 'validator';
import { EPages } from "../enums";

const useAddProduct = (INITIAL_FORM: Store.IForm, onAdd: (product: Store.IProduct) => void) => {
  const [errorsList, setErrorsList] = useState<{ [key: string]: string }>({});
  const errors: { [key: string]: string } = {};
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();

  const validate = (key: string, value: string) => {
    if (key === 'name' && value.length <= 3) {
      errors[key] = "The product must more than 3 characters"
    }

    if (key === 'imageURL' && !validator.isURL(value)) {
      errors[key] = "Invalid image URL";
    }

    if (key === 'price') {
      const numValue = Number(value);
      if (numValue <= 0) {
        errors[key] = "The price is required (NO FREE PRODUCTS!!!)";
      }
    }
    if (key === 'category' && value === "") {
      errors[key] = "Please choose a category :)"
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const keys = ['name', 'price', 'desc', 'imageURL', 'category'];
    const formData: Store.IForm = { ...INITIAL_FORM };

    keys.forEach(key => {
      const value = (e.target as any)[key].value;
      validate(key, value);
      (formData as any)[key] = value;
    });

    if (Object.keys(errors).length) {
      setErrorsList(errors);
      toast.warn("Incorrect Fields Found");
      return;
    }

    const newProduct: Store.IProduct = {
      id: Date.now(),
      wishListCounter: 0,
      ...formData
    };

    onAdd(newProduct);
    toast.success("Product Added Successfully");

    formRef.current?.reset();
    // if (formRef.current?.style) {
    //   formRef.current.style.background = "red";
    // }
    navigate(`/${EPages.LIST}`);
  }

  return {
    errorsList,
    formRef,
    handleSubmit
  }
}

export default useAddProduct;