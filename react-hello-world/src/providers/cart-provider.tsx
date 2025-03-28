import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router";
import { EPages } from "../enums";

interface ICartContext {
  cart: Store.ICart;
  addToCart: (id: number) => void;
}

export const CartContext = createContext<ICartContext>({ cart: [], addToCart: () => { } });

const CartProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [cart, setCart] = useState<Store.ICart>([]);

  const addToCart = (id: number) => {
    let found = false;
    setCart(cart => cart.map(item => {
      if (item.id === id) {
        found = true;
        return { ...item, count: item.count + 1 }
      } else return item;
    }));

    if (!found) {
      setCart(old => ([...old, { id: id, count: 1 }]));
    }
    navigate(`/${EPages.CATEGORIES}`); // TODO: go to cart page
  }

  return <CartContext.Provider value={{ cart, addToCart }}>{children}</CartContext.Provider>
}

export default CartProvider;