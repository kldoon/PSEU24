import React, { useEffect, useState } from 'react';
import classes from './add-product.module.css';
import classNames from 'classnames';

interface IProps {
  visible: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  INITIAL_FORM: Store.IForm;
  errorsList: { [key: string]: string };
}

const ProductForm = (props: IProps) => {
  const { visible, handleSubmit, INITIAL_FORM, errorsList } = props;
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // On mounting this will run
    console.log("Product form mounted");

    return () => {
      // On un-mounting this will run
      console.log("Product form Unmounted!");
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
      // console.log(newDate);
    }, 1000);

    return () => {
      //This will help in removing the interval thread when the 
      // add product form component is unmounted, (better performance)
      clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    const s = time.getSeconds()
    if (s == 0) {
      console.log("Heyyyy one minute passed");
    }
  }, [time]);

  return (
    <form
      className={classNames(classes.container, visible && classes.visible)}
      onSubmit={handleSubmit}
    >
      <h2 className={classes.title}>Add New Product span</h2>
      <p className={classes.subtitle}>Please fill all the required product details</p>
      <p className={classes.subtitle}>{time.toLocaleTimeString()}</p>

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
  )
}

export default ProductForm;