import express from 'express';
import productController from '../controllers/products.controller.js'

const router = express.Router();

router.post('/', (req: express.Request<any, any, Store.IProduct>, res: express.Response) => {
  const product = req.body;
  const result = productController.createProduct(product);
  if (!result.success) {
    res.status(400).json(result.errors);
  } else {
    res.status(201).send();
  }
});

router.get("/", (req, res) => {
  const products = productController.getAllProducts();
  res.json(products);
})

export default router;