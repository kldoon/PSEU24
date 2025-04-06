import classNames from 'classnames';
import classes from './product.module.css';
import { useContext } from 'react';
import { CartContext } from '../../providers/cart-provider';
import { Link } from 'react-router';

interface IProps {
  data: Store.IProduct;
  isWishList: boolean;
  onWish: (id: number) => void;
  onDelete: () => void;
}

const Product = (props: IProps) => {
  const { data } = props;
  const { addToCart } = useContext(CartContext);

  return (
    <div
      className={classes.product}
      // Conditional styling (full object with multi attributes)
      style={props.isWishList ? { boxShadow: '0 4px 8px rgba(255, 0, 0, 0.2)', borderRadius: '20px' } : {}}
    >
      <img src={data.imageURL} alt={data.name} width={100} height={100} />
      <Link to={`/product/${data.name}/${data.id}`}><h2 className={classes.name}>{data.name}</h2></Link>
      <h3 className={classes.price}>{data.price}</h3>
      <b className={classes.desc}><small>{data.category}</small></b>
      <p className={classes.desc}>{data.desc}</p>
      <div className={classes.actions}>
        <button onClick={() => addToCart(data.id)} title='Add to Cart'>➕</button>
        <button
          // Conditional classname, if the isWishList = true then add a class name called wishList to the button          
          className={classNames(classes['wish-button'], props.isWishList && classes.wishList)}
          onClick={() => props.onWish(data.id)}
        >❤️ <span>{data.wishListCounter}</span>
        </button>
        <button onClick={props.onDelete}>🗑️</button>
      </div>
    </div >
  )
}

export default Product;