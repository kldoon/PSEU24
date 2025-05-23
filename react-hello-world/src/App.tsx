import './App.css';
import Header from './components/header/Header';
import CategoriesPage from './pages/categories/Categories';
import ProductsListPage from './pages/products-list/ProductsList';
import { useEffect, useReducer } from 'react';
import WishListPage from './pages/wish-list/WishList';
import AddProductPage from './pages/add-product/AddProduct';
import { EPages } from './enums';
import { storeReducer } from './reducers/store-reducer';
import { StoreReducer } from './reducers/store-reducer.types';
import { storeData } from './utils/storage';
import CartProvider from './providers/cart-provider';
import { BrowserRouter, Route, Routes } from 'react-router';
import NotFound from './pages/not-found/NotFound';
import LoginPage from './pages/login/Login';
import ProductDetailsPage from './pages/product-details/Product-Details';
import CartPage from './pages/cart/Cart';
import HomePage from './pages/home/home';
import Guard from './components/guard/Guard';
import { ToastContainer } from 'react-toastify';
import { fetchProducts } from './services/products.service';


function App() {
  const [state, dispatch] = useReducer(storeReducer, { isInitialized: false, productList: [], wishList: [] });

  useEffect(() => {
    if (!state.isInitialized) {
      fetchProducts().then(res => {
        dispatch({ type: StoreReducer.EActionTypes.INIT, payload: { initialList: res } });
      });
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
  }

  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <ToastContainer />
          <Header />
          <Routes>
            <Route
              path={`/${EPages.HOME}`}
              element={<HomePage />}
            />
            <Route
              path={`/${EPages.CATEGORIES}`}
              element={<CategoriesPage />}
            />
            <Route
              path={`/${EPages.CART}`}
              element={<CartPage products={state.productList} />}
            />
            <Route
              path={`/${EPages.WISH}`}
              element={
                <Guard allowedRoles={['user', 'admin']}>
                  <WishListPage
                    wishList={state.wishList}
                    productList={state.productList}
                    onRemove={(id) => dispatch({ type: StoreReducer.EActionTypes.TOGGLE_WISHLIST, payload: { id } })}
                  />
                </Guard>
              } />
            <Route
              path={`/${EPages.ADD}`}
              element={
                <Guard allowedRoles={['admin']}>
                  <AddProductPage onAdd={handleAddProduct} />
                </Guard>
              }
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
              element={
                <Guard allowedRoles={['*']}>
                  <ProductDetailsPage products={state.productList} />
                </Guard>
              }
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