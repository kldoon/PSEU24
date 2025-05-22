import { USERS } from "../data/users.js";

interface IFindUsersParams { id?: number, email?: string, nameQ?: string };

const getAllUsers = () => {
  return USERS;
}

const findUserById = (id: number) => {
  const user = USERS.find(user => user.id === id);
  return user;
}

const findUsers = ({ id, email, nameQ }: IFindUsersParams) => {
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

  return users;
}


export default {
  getAllUsers,
  findUserById,
  findUsers
}