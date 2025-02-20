import Product from '../product/Product';
import './products-list.css';

interface IProps {
  data: Store.IProduct[];
  onWish: (id: number) => void;
}

const ProductsList = (props: IProps) => {
  return (
    <div className="products-list">
      {
        props.data.map(product => (
          <Product
            key={product.id}
            data={product}
            onWish={props.onWish}
          />
        ))
      }
    </div>
  )
}

export default ProductsList