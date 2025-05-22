import { PRODUCTS } from "../data/products.js";
import { validateProduct } from "../utils/validation.js";

const createProduct = (product: Store.IProduct) => {
  const errors = validateProduct(product);
  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  } else {
    PRODUCTS.push(product);
    return { success: true };
  }
}

const getAllProducts = () => {
  return PRODUCTS;
}

export default {
  createProduct,
  getAllProducts
}