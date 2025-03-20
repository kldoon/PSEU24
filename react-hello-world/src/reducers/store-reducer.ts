import { readData } from "../utils/storage";
import { StoreReducer } from "./store-reducer.types";

const storeReducer = (state: StoreReducer.IState, action: StoreReducer.IAction): StoreReducer.IState => {
  switch (action.type) {
    case StoreReducer.EActionTypes.INIT: {
      const productList = readData('products-list') || [];
      const wishList = readData('wish-list') || [];
      return { ...state, productList, wishList, isInitialized: true };
    }
    case StoreReducer.EActionTypes.ADD_PRODUCT: {
      return { ...state, productList: [action.payload.product, ...state.productList] };
    }
    case StoreReducer.EActionTypes.DELETE_PRODUCT: {
      return { ...state, productList: state.productList.filter(item => item.id !== action.payload.id) };
    }
    case StoreReducer.EActionTypes.TOGGLE_WISHLIST: {
      let delta = 0;
      let wishList = [];
      const id = action.payload.id;
      if (state.wishList.includes(id)) {
        delta = -1;
        wishList = state.wishList.filter(itemId => itemId !== id);
      } else {
        delta = +1;
        wishList = Array.from(new Set([...state.wishList, id]));
      }

      const productList = state.productList.map(prod => prod.id !== id ? prod : { ...prod, wishListCounter: prod.wishListCounter + delta });
      return { ...state, productList, wishList }
    }
    default:
      return state;
  }
}

export { storeReducer };