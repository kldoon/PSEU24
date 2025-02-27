import Product from '../product/Product';
import './products-list.css';

interface IProps {
  data: Store.IProduct[];
  wishList: number[];
  onWish: (id: number) => void;
  onDelete: (index: number) => void;
}

const ProductsList = (props: IProps) => {
  return (
    <div className="products-list">
      {
        Boolean(props.data.length)
          ? props.data.map((product, index) => (
            <Product
              key={product.id}
              data={product}
              onWish={props.onWish}
              isWishList={props.wishList.includes(product.id)}
              onDelete={() => props.onDelete(index)}
            />
          ))
          : <h3>Can't Find Any Products</h3>
      }
    </div>
  )
}

export default ProductsList