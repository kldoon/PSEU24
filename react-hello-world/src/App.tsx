import './App.css';
import Header from './components/header/Header';
import CategoriesPage from './pages/categories/Categories';
import ProductsListPage from './pages/products-list/ProductsList';
import { useEffect, useReducer, useState } from 'react';
import WishListPage from './pages/wish-list/WishList';
import AddProductPage from './pages/add-product/AddProduct';
import { EPages } from './enums';
import { storeReducer } from './reducers/store-reducer';
import { StoreReducer } from './reducers/store-reducer.types';
import { storeData } from './utils/storage';
import CartProvider from './providers/cart-provider';
import { BrowserRouter, Route, Routes } from 'react-router';
import ProductDetailsPage from './pages/product-details/product-details';
import NotFound from './pages/not-found/NotFound';
import LoginPage from './pages/login/Login';


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
      <BrowserRouter>
        <CartProvider>
          <Header />
          <Routes>
            <Route
              path={`/${EPages.CATEGORIES}`}
              element={<CategoriesPage />}
            />
            <Route
              path={`/${EPages.WISH}`}
              element={<WishListPage
                wishList={state.wishList}
                productList={state.productList}
                onRemove={(id) => dispatch({ type: StoreReducer.EActionTypes.TOGGLE_WISHLIST, payload: { id } })}
              />} />
            <Route
              path={`/${EPages.ADD}`}
              element={<AddProductPage onAdd={handleAddProduct} />}
            />
            <Route
              path={`/${EPages.LIST}`}
              element={
                <ProductsListPage
                  data={state.productList}
                  wishList={state.wishList}
                  onWish={(id) => dispatch({ type: StoreReducer.EActionTypes.TOGGLE_WISHLIST, payload: { id } })}
                  onDelete={(id) => dispatch({ type: StoreReducer.EActionTypes.DELETE_PRODUCT, payload: { id } })}
                />
              } />
            <Route
              path="/product/:category/:id"
              element={<ProductDetailsPage products={state.productList} />}
            />
            <Route
              path="/user/login"
              element={<LoginPage />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div >
  )
}

export default App;