import express from 'express';
import { validateProduct } from '../utils/validation.js';
import { PRODUCTS } from '../data/products.js';

const router = express.Router();

router.post('/', (req: express.Request<any, any, Store.IProduct>, res: express.Response) => {
  const product = req.body;
  const errors = validateProduct(product);
  if (Object.keys(errors).length > 0) {
    res.status(400).json(errors);
  } else {
    PRODUCTS.push(product);
    res.status(201).send();
  }
});

router.get("/", (req, res) => {
  res.json(PRODUCTS);
})

export default router;