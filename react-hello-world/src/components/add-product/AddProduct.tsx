import React, { useState } from 'react';
import classes from './add-product.module.css';
import classNames from 'classnames';
import validator from 'validator';
import ProductForm from './ProductForm';

interface IProps {
  onAdd: (product: Store.IProduct) => void;
}

const AddProduct = (props: IProps) => {
  const [visible, setVisible] = useState(false);

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

    // const name = e.target["name"].value
    const newProduct: Store.IProduct = {
      id: Date.now(),
      wishListCounter: 0,
      ...formData
    };

    props.onAdd(newProduct);
  }

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Add Product</button>
      {
        visible ?
          <ProductForm
            INITIAL_FORM={INITIAL_FORM}
            errorsList={errorsList}
            handleSubmit={handleSubmit}
            visible={visible}
          />
          : null
      }
    </div>
  )
}

export default AddProduct;