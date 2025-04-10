import React, { useEffect, useState } from 'react';
import validator from 'validator';
import ProductForm from '../../components/product-form/ProductForm';
import { readData } from '../../utils/storage';
import { useNavigate } from 'react-router';

interface IProps {
  onAdd: (product: Store.IProduct) => void;
}

const AddProductPage = (props: IProps) => {
  const navigate = useNavigate();
  useEffect(() => {
    const user: Store.IUser = readData('sarah-express-user');
    if (user) {
      if (user.role !== 'admin') {
        navigate('/');
      }
    } else {
      navigate('/user/login');
    }
  }, []);

  const INITIAL_FORM: Store.IForm = { name: '', price: 0, imageURL: '', desc: '', inStock: true };
  const errors: { [key: string]: string } = {};

  const [errorsList, setErrorsList] = useState<{ [key: string]: string }>({});

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

  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const keys = ['name', 'price', 'desc', 'imageURL'];

    const formData: Store.IForm = { ...INITIAL_FORM };

    keys.forEach(key => {
      const value = (e.target as any)[key].value;
      validate(key, value);
      // @ts-ignore
      formData[key] = value;
    });

    if (Object.keys(errors).length) {
      setErrorsList(errors);
      return;
    }

    const newProduct: Store.IProduct = {
      id: Date.now(),
      wishListCounter: 0,
      category: 'Smart Home',
      ...formData
    };

    props.onAdd(newProduct);
  }

  return (
    <ProductForm
      INITIAL_FORM={INITIAL_FORM}
      errorsList={errorsList}
      handleSubmit={handleSubmit}
      visible={true}
    />
  )
}

export default AddProductPage;