import React, { useState } from 'react';
import classes from './add-product.module.css';
import classNames from 'classnames';
import validator from 'validator';

interface IProps {
  onAdd: (product: Store.IProduct) => void;
}

const AddProduct = (props: IProps) => {
  const [visible, setVisible] = useState(true);
  interface IForm {
    name: string,
    price: number,
    imageURL: string,
    desc: string,
    inStock: boolean
  };

  const INITIAL_FORM: IForm = { name: '', price: 0, imageURL: '', desc: '', inStock: true };

  // const [form, setForm] = useState<IForm>(INITIAL_FORM);
  const [errorsList, setErrorsList] = useState<{ [key: string]: string }>({});

  const validate = (key: string, value: string) => {
    const errors: { [key: string]: string } = {};
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

    setErrorsList(errors);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const name = e.target["name"].value
    const newProduct: Store.IProduct = {
      id: Date.now(),
      wishListCounter: 0,
      inStock: true,
      name: (e.target as any)["name"].value,
      price: (e.target as any)["price"].value,
      desc: (e.target as any)["desc"].value,
      imageURL: (e.target as any)["imageURL"].value
    };

    props.onAdd(newProduct);
  }

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Add Product</button>
      <form
        className={classNames(classes.container, visible && classes.visible)}
        onSubmit={handleSubmit}
      >
        <h2 className={classes.title}>Add New Product</h2>
        <p className={classes.subtitle}>Please fill all the required product details</p>

        <div className={classes.formGroup}>
          <label className={classes.label} htmlFor="pName">Product Name:</label>
          <input
            className={classes.input}
            id="pName"
            name="name"
            defaultValue={INITIAL_FORM.name}
          />
          <span className={classes.error}>{errorsList['name']}</span>
        </div>

        <div className={classes.formGroup}>
          <label className={classes.label} htmlFor="pPrice">Product Price:</label>
          <input
            className={classes.input}
            id="pPrice"
            name="price"
            type="number"
            defaultValue={INITIAL_FORM.price}
          />
          <span className={classes.error}>{errorsList['price']}</span>
        </div>

        <div className={classes.formGroup}>
          <label className={classes.label} htmlFor="pImage">Product Image URL:</label>
          <input
            className={classes.input}
            id="pImage"
            name="imageURL"
            defaultValue={INITIAL_FORM.imageURL}
          />
          <span className={classes.error}>{errorsList['imageURL']}</span>
        </div>

        <div className={classes.formGroup}>
          <label className={classes.label} htmlFor="pDesc">Product Description:</label>
          <textarea
            className={classes.textarea}
            id="pDesc"
            name="desc"
            defaultValue={INITIAL_FORM.desc}
          />
        </div>

        <div className={classes.buttonGroup}>
          <button type="submit" className={classes.button}>Submit</button>
          <button type="reset" className={classes.button}>Reset</button>
        </div>
      </form>
    </div>
  )
}

export default AddProduct;