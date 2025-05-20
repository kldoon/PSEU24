import validator from 'validator';

const validateProduct = (product: Store.IProduct) => {
  const errors: Record<string, string> = {};

  Object.entries(product).forEach(v => {
    const key = v[0];
    const value = v[1];

    if (key === 'name' && value.length <= 3) {
      errors[key] = "The product name must be more than 3 characters";
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
  });

  return errors;
};


export {
  validateProduct
}