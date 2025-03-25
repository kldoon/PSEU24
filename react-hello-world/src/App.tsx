import './App.css';
import Header from './components/header/Header';
import Categories from './components/categories/Categories';
import ProductsList from './components/products-list/ProductsList';
import { useEffect, useReducer, useState } from 'react';
import WishList from './components/wish-list/WishList';
import AddProduct from './components/add-product/AddProduct';
import { EPages } from './enums';
import { storeReducer } from './reducers/store-reducer';
import { StoreReducer } from './reducers/store-reducer.types';
import { storeData } from './utils/storage';
import CartProvider from './providers/cart-provider';
import { BrowserRouter, Route, Routes } from 'react-router';
import ProductDetails from './components/product-details/product-details';
import NotFound from './components/not-found/NotFound';


function App() {
  const [state, dispatch] = useReducer(storeReducer, { isInitialized: false, productList: [], wishList: [] });
  const [currentPage, setCurrentPage] = useState<EPages>(EPages.CATEGORIES);

  useEffect(() => {
    if (!state.isInitialized) {
      dispatch({ type: StoreReducer.EActionTypes.INIT });
    }
  }, []);

  useEffect(() => {
    if (state.isInitialized) {
      storeData(state.productList, 'products-list');
    }
  }, [state.productList, state.isInitialized]);

  useEffect(() => {
    if (state.isInitialized) {
      storeData(state.wishList, 'wish-list');
    }
  }, [state.wishList, state.isInitialized]);

  const handleAddProduct = (product: Store.IProduct) => {
    dispatch({ type: StoreReducer.EActionTypes.ADD_PRODUCT, payload: { product } })
    setCurrentPage(EPages.LIST);
  }

  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path={`/${EPages.CATEGORIES}`}
              element={<Categories />}
            />
            <Route
              path={`/${EPages.WISH}`}
              element={<WishList
                wishList={state.wishList}
                productList={state.productList}
                onRemove={(id) => dispatch({ type: StoreReducer.EActionTypes.TOGGLE_WISHLIST, payload: { id } })}
              />} />
            <Route
              path={`/${EPages.ADD}`}
              element={<AddProduct onAdd={handleAddProduct} />}
            />
            <Route
              path={`/${EPages.LIST}`}
              element={
                <ProductsList
                  data={state.productList}
                  wishList={state.wishList}
                  onWish={(id) => dispatch({ type: StoreReducer.EActionTypes.TOGGLE_WISHLIST, payload: { id } })}
                  onDelete={(id) => dispatch({ type: StoreReducer.EActionTypes.DELETE_PRODUCT, payload: { id } })}
                />
              } />
            <Route
              path="/product/:category/:id"
              element={<ProductDetails products={state.productList} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App;