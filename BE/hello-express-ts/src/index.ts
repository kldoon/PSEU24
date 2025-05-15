import express from 'express';
import { IGetUsersRequest, IGetUsersResponse } from './@types/routes.types';

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

app.get('/users/id/:id', (req: express.Request<Store.IGetUserByIdRequestParams>, res: express.Response) => {
  const id = Number(req.params.id);
  const user = USERS.find(user => user.id === id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).send("User Not Found!");
  }
});

app.get('/users/user', (req: IGetUsersRequest, res: IGetUsersResponse) => {
  const { id, email, nameQ } = req.query;
  let users: Store.IUser[] = [];

  if (id) {
    const user = USERS.find(user => user.id === Number(id));
    if (user) {
      users.push(user);
    }
  }

  if (email) {
    const user = USERS.find(user => user.email === email);
    if (user) {
      users.push(user);
    }
  }

  if (nameQ) {
    const foundUsers = USERS.filter(user => user.name.toLowerCase().includes(nameQ.toLowerCase()));
    users.push(...foundUsers);
  }

  if (users.length) {
    res.status(200).json(users);
  } else {
    res.status(404).send("No Users Found!");
  }
});

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