import express from 'express';

const app = express()
const port: number = 3000;

app.get('/users', (req: express.Request, res: express.Response) => {
  try {
    // Read all users from
    // throw ("error");
    
    res.status(401).send("You are unauthorized to do this!")
  } catch (error) {
    res.status(500).send("Failed to find users");
  }
});

app.get('/', (req: express.Request, res: express.Response) => {
  res.status(204).send();
});

app.all('', (req: express.Request, res: express.Response) => {
  res.status(404).send("Not found!");
});

app.listen(port, () => {
  console.log(`Hello express app listening on port ${port}`)
});