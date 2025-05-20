import express from 'express';
import { IGetUsersRequest, IGetUsersResponse } from '../@types/routes.types.js';
import { USERS } from '../data/users.js';

const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
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

router.get('/id/:id', (req: express.Request<Store.IGetUserByIdRequestParams>, res: express.Response) => {
  const id = Number(req.params.id);
  const user = USERS.find(user => user.id === id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).send("User Not Found!");
  }
});

router.get('/find', (req: IGetUsersRequest, res: IGetUsersResponse) => {
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

export default router;