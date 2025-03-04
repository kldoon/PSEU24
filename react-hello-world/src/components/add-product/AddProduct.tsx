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

  const [form, setForm] = useState<IForm>(INITIAL_FORM);
  const [errorsList, setErrorsList] = useState<{ [key: string]: string }>({});

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let value: any = e.target.value;
    let key = e.target.name;

    const errors: { [key: string]: string } = {};
    if (key === 'name' && value.length <= 3) {
      errors[key] = "The product must more than 3 characters"
    }

    if (key === 'imageURL' && !validator.isURL(form.imageURL)) {
      errors[key] = "Invalid image URL";
    }

    if (key === 'price') {
      value = Number(value);
      if (form.price <= 0) {
        errors[key] = "The price is required (NO FREE PRODUCTS!!!)";
      }
    }

    setErrorsList(errors);

    setForm({ ...form, [key]: value });
  }

  const handleSubmit = () => {
    const newProduct: Store.IProduct = { id: Date.now(), wishListCounter: 0, ...form };
    props.onAdd(newProduct);
    handleReset();
  }

  const handleReset = () => {
    setForm(INITIAL_FORM);
  }

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Add Product</button>

      <div className={classNames(classes.container, visible && classes.visible)}>
        <h2 className={classes.title}>Add New Product</h2>
        <p className={classes.subtitle}>Please fill all the required product details</p>

        <div className={classes.formGroup}>
          <label className={classes.label} htmlFor="pName">Product Name:</label>
          <input
            className={classes.input}
            id="pName"
            name="name"
            value={form.name}
            onChange={handleFormChange}
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
            value={form.price}
            onChange={handleFormChange}
          />
          <span className={classes.priceDetails}>
            <b>with discount:</b> {(form.price ?? 0) * 0.8}
          </span>
          <span className={classes.error}>{errorsList['price']}</span>
        </div>

        <div className={classes.formGroup}>
          <label className={classes.label} htmlFor="pImage">Product Image URL:</label>
          <input
            className={classes.input}
            id="pImage"
            name="imageURL"
            value={form.imageURL}
            onChange={handleFormChange}
          />
          <span className={classes.error}>{errorsList['imageURL']}</span>
        </div>

        <div className={classes.formGroup}>
          <label className={classes.label} htmlFor="pDesc">Product Description:</label>
          <textarea
            className={classes.textarea}
            id="pDesc"
            name="desc"
            value={form.desc}
            onChange={handleFormChange}
          />
        </div>

        <div className={classes.buttonGroup}>
          <button className={classes.button} onClick={handleSubmit}>Submit</button>
          <button className={classes.button} onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default AddProduct;