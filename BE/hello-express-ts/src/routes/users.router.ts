import express from 'express';
import { IGetUsersRequest, IGetUsersResponse } from '../@types/routes.types.js';
import userController from '../controllers/user.controller.js';

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

router.get('/find', (req: IGetUsersRequest, res: IGetUsersResponse) => {
  const { id, email, nameQ } = req.query;
  const users = userController.findUsers({ id: Number(id), email, nameQ });

  if (users.length) {
    res.status(200).json(users);
  } else {
    res.status(404).send("No Users Found!");
  }
});

export default router;