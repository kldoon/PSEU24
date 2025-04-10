import { useNavigate } from "react-router";
import { readData, removeData, storeData } from "../utils/storage";
import { EPages } from "../enums";

const useAuth = () => {
  const navigate = useNavigate();

  const readUser = () => {
    return readData('sarah-express-user') as Store.IUser;
  }

  const login = (username: string, password: string) => {
    if (username.toLowerCase() === 'sarah' && password === '1234') {
      const user = {
        username,
        role: 'admin'
      };
      storeData(user, 'sarah-express-user');
      navigate(`/${EPages.HOME}`);
    } else if (username.toLowerCase() === 'eid' && password === '1234') {
      const user = {
        username,
        role: 'user'
      };

      storeData(user, 'sarah-express-user');
      navigate(`/${EPages.HOME}`);
    }
    else {
      alert('Wrong username or password!');
      localStorage.removeItem('username');
    }
  }

  const logout = () => {
    removeData('sarah-express-user');
    navigate('/');
  }

  return {
    login,
    logout,
    readUser,
    user: readUser()
  }
}

export default useAuth;