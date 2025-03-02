import React, { useState } from 'react';

const AddProduct = () => {
  const [visible, setVisible] = useState(true);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [imageURL, setImageURL] = useState("");

  /*
   {
    id: number,
    name: string,
    price: number,
    imageURL: string,
    wishListCounter: number,
    desc: string,
    inStock: boolean
  }
  */

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setName(e.target.value.replaceAll(' ', '-'));
    setName(e.target.value);
  }

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setName(e.target.value.replaceAll(' ', '-'));
    setPrice(Number(e.target.value));
  }

  const handleImageURLChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageURL(e.target.value)
  }

  const handleSubmit = () => {
    const newProduct = { name, price, imageURL };
    console.log(newProduct);
  }

  const handleReset = () => {
    setName('');
    setPrice(0);
    setImageURL('');
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
              <input id="pName" value={name} onChange={handleNameChange} />
            </div>
            <div>
              <label htmlFor="pPrice">Product Price: </label>
              <input id="pPrice" type="number" value={price} onChange={handlePriceChange} />
            </div>
            <div>
              <label htmlFor="pImage">Product Image URL: </label>
              <input id="pImage" value={imageURL} onChange={handleImageURLChange} />
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