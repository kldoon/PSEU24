export namespace StoreReducer {
  export interface IState {
    initialized: boolean;
    productList: Store.IProduct[];
    wishList: number[];
  }

  export enum EActionTypes {
    INIT = 'init',
    TOGGLE_WISHLIST = 'toggle-wishlist',
    DELETE_PRODUCT = 'delete-product',
    ADD_PRODUCT = 'add-product'
  }

  interface IInitAction {
    type: EActionTypes.INIT
  }

  interface IToggleWishListAction {
    type: EActionTypes.TOGGLE_WISHLIST,
    payload: { id: number }
  }

  interface IDeleteProductAction {
    type: EActionTypes.DELETE_PRODUCT,
    payload: { id: number }
  }

  interface IAddProductAction {
    type: EActionTypes.ADD_PRODUCT,
    payload: { product: Store.IProduct }
  }

  export type IAction = IInitAction
    | IToggleWishListAction
    | IDeleteProductAction
    | IAddProductAction
}