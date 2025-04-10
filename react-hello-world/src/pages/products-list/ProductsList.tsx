import { useEffect, useState } from 'react';
import FilterBar from '../../components/filter-bar/FilterBar';
import Product from '../../components/product/Product';
import './products-list.css';
import { useSearchParams } from 'react-router';
import useParams from '../../hooks/params.hook';

interface IProps {
  data: Store.IProduct[];
  wishList: number[];
  onWish: (id: number) => void;
  onDelete: (id: number) => void;
}

const ProductsListPage = (props: IProps) => {
  const { params } = useParams();
  const [filteredProducts, setFilteredProducts] = useState<Store.IProduct[]>([]);

  useEffect(() => {
    let filtered = props.data.filter(p => p.name.toLowerCase().includes(params.searchTerm.toLowerCase()));
    const categories = params.categories;

    if (categories.length) {
      filtered = filtered.filter(p => categories.includes(p.category))
    }

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