import express from 'express';
import { IGetUsersRequest, IGetUsersResponse } from '../@types/routes.types.js';
import userController from '../controllers/user.controller.js';
import { USERS } from '../data/users.js';
import jwt from 'jsonwebtoken';
import { checkUserToken } from '../middleware/auth.middleware.js';

const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
  try {
    if (req.headers["x-user-token"]) {
      res.statusCode = 200;
      const users = userController.getAllUsers();
      res.json(users);
    } else {
      res.status(401).send("You are unauthorized to do this!");
    }
  } catch (error) {
    res.status(500).send("Failed to find users");
  }
});

router.get('/id/:id', (req: express.Request<Store.IGetUserByIdRequestParams>, res: express.Response) => {
  const id = Number(req.params.id);
  const user = userController.findUserById(id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).send("User Not Found!");
  }
});

router.get('/find', checkUserToken, (req: IGetUsersRequest, res: IGetUsersResponse) => {
  const { id, email, nameQ } = req.query;
  const users = userController.findUsers({ id: Number(id), email, nameQ });

  if (users.length) {
    res.status(200).json(users);
  } else {
    res.status(404).send("No Users Found!");
  }
});

router.post('/login', (req: express.Request, res: express.Response) => {
  const { email, password } = req.body;

  const user = USERS.find(user => user.email === email && user.password === password)
  if (!user) {
    res.status(401).send("Invalid email or password!");
  } else {
    console.log("user", user);
    const token = jwt.sign(user, process.env.JWT_SECRET || 'default_secret')
    res.json({
      message: "Login successful!",
      token: token
    });
  }
})

export default router;