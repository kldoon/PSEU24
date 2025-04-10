import { useContext } from "react";
import { CartContext } from "../providers/cart-provider";
import useAuth from "./auth.hook";

const useHeader = () => {
  const { cart } = useContext(CartContext);
  const { user } = useAuth();

  const showAdd = user?.role === 'admin';
  const showLogout = Boolean(user);

  return {
    cart,
    showAdd,
    showLogout
  }
}

export default useHeader;