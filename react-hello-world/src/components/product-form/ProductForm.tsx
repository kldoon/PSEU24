import React, { useEffect, useState } from 'react';
import classes from './add-product.module.css';
import { ECategory } from '../../enums';

interface IProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  formRef: React.RefObject<HTMLFormElement | null>;
  INITIAL_FORM: Store.IForm;
  errorsList: { [key: string]: string };
}

const ProductForm = (props: IProps) => {
  const { handleSubmit, INITIAL_FORM, errorsList } = props;
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      //This will help in removing the interval thread when the 
      // add product form component is unmounted, (better performance)
      clearInterval(interval);
    }
  }, []);

  return (
    <form
      className={classes.container}
      onSubmit={handleSubmit}
      ref={props.formRef}
    >
      <h2 className={classes.title}>Add New Product</h2>
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

      <div className={classes.formGroup}>
        <label className={classes.label} htmlFor="category">Category:</label>
        <select name="category" defaultValue="">
          <option value="" disabled>-- Select a Category</option>
          {
            // @ts-ignore
            Object.values(ECategory).map(entry => (
              <option key={entry} value={entry}>{entry}</option>
            ))
          }
        </select><br />
        <span className={classes.error}>{errorsList['category']}</span>
      </div>

      <div className={classes.buttonGroup}>
        <button type="reset" className={`${classes.button} ${classes.secondaryButton}`}>Reset</button>
        <button type="submit" className={classes.button}>Submit</button>
      </div>
    </form>
  )
}

export default ProductForm;