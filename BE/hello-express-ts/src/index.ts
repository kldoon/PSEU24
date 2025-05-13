import express from 'express';

const app = express()
const port: number = 3000;

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Hello express app listening on port ${port}`)
});