import React, { useState } from 'react';

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

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let value: any = e.target.value;

    if (e.target.name === 'price') {
      value = Number(value);
    }
    setForm({ ...form, [e.target.name]: value });
  }

  const handleSubmit = () => {
    const newProduct: Store.IProduct = { id: Date.now(), wishListCounter: 0, ...form };
    console.log(newProduct);
    props.onAdd(newProduct);
    handleReset();
  }

  const handleReset = () => {
    setForm(INITIAL_FORM);
  }

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Add Product</button>
      {
        visible && (
          <div>
            <h2>Add New Product</h2>
            <p>Please fill all the required product details</p><br />
            <div>
              <label htmlFor="pName">Product Name: </label>
              <input id="pName" name="name" value={form.name} onChange={handleFormChange} />
            </div>
            <div>
              <label htmlFor="pPrice">Product Price: </label>
              <input id="pPrice" name="price" type="number" value={form.price} onChange={handleFormChange} />
              <span><b>with discount:</b>{(form.price ?? 0) * 0.8}</span>
            </div>
            <div>
              <label htmlFor="pImage">Product Image URL: </label>
              <input id="pImage" name="imageURL" value={form.imageURL} onChange={handleFormChange} />
            </div>
            <div>
              <label htmlFor="pDesc">Product Description: </label>
              <textarea id="pDesc" name="desc" value={form.desc} onChange={handleFormChange} />
            </div>
            <div>
              <button onClick={handleSubmit}>Submit</button>
              <button onClick={handleReset}>Reset</button>
            </div>
          </div>
        )
      }
      <hr />
    </div>
  )
}

export default AddProduct;