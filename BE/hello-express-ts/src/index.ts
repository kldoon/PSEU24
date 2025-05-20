import express from 'express';
import userRouter from './routes/users.router.js';
import productRouter from './routes/products.router.js';

const app = express();
const port: number = 3000;

app.use(express.json());

app.use('/users', userRouter);
app.use('/products', productRouter);

app.get('/', (req: express.Request, res: express.Response) => {
  res.status(204).send();
});

// Catch all route
app.all('/{*notFound}', (req: express.Request, res: express.Response) => {
  res.status(404).send("Not found!");
});

app.listen(port, () => {
  console.log(`Hello express app listening on port ${port}`)
});