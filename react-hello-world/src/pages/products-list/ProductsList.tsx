import { useEffect, useState } from 'react';
import FilterBar from '../../components/filter-bar/FilterBar';
import Product from '../../components/product/Product';
import './products-list.css';
import { useSearchParams } from 'react-router';

interface IProps {
  data: Store.IProduct[];
  wishList: number[];
  onWish: (id: number) => void;
  onDelete: (id: number) => void;
}

const ProductsListPage = (props: IProps) => {
  const [params] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Store.IProduct[]>([]);

  useEffect(() => {
    const q = params.get("searchTerm") || '';
    const filtered = props.data.filter(p => p.name.toLowerCase().includes(q.toLowerCase()));
    setFilteredProducts(filtered);
  }, [params, props.data]);

  return (
    <div className="products-list">
      <FilterBar />
      {
        Boolean(filteredProducts.length)
          ? filteredProducts.map(product => (
            <Product
              key={product.id}
              data={product}
              onWish={props.onWish}
              isWishList={props.wishList.includes(product.id)}
              onDelete={() => props.onDelete(product.id)}
            />
          ))
          : <h3>Can't Find Any Products</h3>
      }
    </div>
  )
}

export default ProductsListPage