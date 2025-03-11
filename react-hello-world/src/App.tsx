import './App.css';
import Header from './components/header/Header';
import Categories from './components/categories/Categories';
import ProductsList from './components/products-list/ProductsList';
import { useEffect, useState } from 'react';
import WishList from './components/wish-list/WishList';
import AddProduct from './components/add-product/AddProduct';
import { EPages } from './enums';

function App() {
  const [pList, setPList] = useState<Store.IProduct[]>([]);
  const [wishList, setWishList] = useState<Array<number>>([]);
  const [currentPage, setCurrentPage] = useState<EPages>(EPages.CATEGORIES);

  useEffect(() => {
    setPList(readData('products-list') || []);
    setWishList(readData('wish-list') || []);
  }, []);

  useEffect(() => {
    storeData(pList, 'products-list');
  }, [pList]);

  useEffect(() => {
    storeData(wishList, 'wish-list');
  }, [wishList]);

  const storeData = (data: any, key: string) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const readData = (key: string): any => {
    return JSON.parse(localStorage.getItem(key) || '');
  };

  const handleToggleWishList = (id: number) => {
    let delta = 0;
    if (wishList.includes(id)) {
      delta = -1;
      setWishList(wishList.filter(itemId => itemId !== id));
    } else {
      delta = +1;
      setWishList(Array.from(new Set([...wishList, id])));
    }

    const newPList = pList.map(prod => prod.id !== id ? prod : { ...prod, wishListCounter: prod.wishListCounter + delta });
    setPList(newPList);
  }

  const handleRemoveFromWishList = (id: number) => {
    setWishList(old => old.filter(item => item !== id));
  }

  const handleDelete = (index: number) => {
    setPList(pList.filter((_, i) => i !== index));
  }

  const handleAddProduct = (product: Store.IProduct) => {
    setPList([product, ...pList]);
    setCurrentPage(EPages.LIST);
  }

  return (
    <div>
      <Header
        productsCount={pList.length}
        onNavigate={(page: EPages) => setCurrentPage(page)}
        currentPage={currentPage}
      />
      {currentPage === EPages.CATEGORIES && <Categories />}
      {currentPage === EPages.WISH && (
        <WishList
          wishList={wishList}
          productList={pList}
          onRemove={handleRemoveFromWishList}
        />
      )}
      {currentPage === EPages.ADD && <AddProduct onAdd={handleAddProduct} />}
      {currentPage === EPages.LIST && (
        <ProductsList
          data={pList}
          wishList={wishList}
          onWish={handleToggleWishList}
          onDelete={handleDelete}
        />
      )}
    </div>
  )
}

export default App;