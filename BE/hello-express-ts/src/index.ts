import express from 'express';

const app = express()
const port: number = 3000;

const USERS: Store.IUser[] = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    role: "Admin",
    isActive: true
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob.smith@example.com",
    role: "User",
    isActive: true
  },
  {
    id: 3,
    name: "Charlie Lee",
    email: "charlie.lee@example.com",
    role: "Moderator",
    isActive: false
  },
  {
    id: 4,
    name: "Dana White",
    email: "dana.white@example.com",
    role: "User",
    isActive: true
  },
  {
    id: 5,
    name: "Eli Brown",
    email: "eli.brown@example.com",
    role: "User",
    isActive: false
  }
];

app.get('/users', (req: express.Request, res: express.Response) => {
  try {
    // console.log(req.headers);
    // console.log(req.host);

    if (req.headers["x-user-token"]) {
      res.statusCode = 200;
      res.json(USERS);
    } else {
      res.status(401).send("You are unauthorized to do this!");
    }
  } catch (error) {
    res.status(500).send("Failed to find users");
  }
});

app.get('/users/id/:id', (req: express.Request<Store.IGetUserByIdRequest>, res: express.Response) => {
  const id = Number(req.params.id);
  const user = USERS.find(user => user.id === id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).send("User Not Found!");
  }
});

app.get('/users/email/:email', (req: express.Request<Store.IGetUserByEmailRequest>, res: express.Response) => {
  const email = req.params.email;
  const user = USERS.find(user => user.email === email);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).send("User Not Found!");
  }
});

// app.get('/users/:id/asdflkasdf/:email', (req: express.Request, res: express.Response) => {
//   const id = Number(req.params.id);
//   const email = req.params.email;
//   const user = USERS.find(user => user.id === id && user.email === email);
//   if (user) {
//     res.status(200).json(user);
//   } else {
//     res.status(404).send("User Not Found!");
//   }
// });

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