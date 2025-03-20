import classNames from 'classnames';
import classes from './product.module.css';
import { useContext } from 'react';
import { CartContext } from '../../App';

interface IProps {
  data: Store.IProduct;
  isWishList: boolean;
  onWish: (id: number) => void;
  onDelete: () => void;
}

const Product = (props: IProps) => {
  const { data } = props;
  const { setCart } = useContext(CartContext);

  const handleAddToCart = () => {
    let found = false;
    setCart(cart => cart.map(item => {
      if (item.id === data.id) {
        found = true;
        return { ...item, count: item.count + 1 }
      } else return item;
    }));

    if (!found) {
      setCart(old => ([...old, { id: data.id, count: 1 }]));
    }

    // const itemIdx = cart.findIndex(item => item.id === data.id);

    // if (itemIdx === -1) {
    //   setCart(old => ([...old, { id: data.id, count: 1 }]));
    // } else {
    //   setCart(cart => cart.map((item, index) =>
    //     index === itemIdx ? { ...item, count: item.count + 1 } : item
    //   ));
    // }
  }

  return (
    <div
      className={classes.product}
      // Conditional styling (full object with multi attributes)
      style={props.isWishList ? { boxShadow: '0 4px 8px rgba(255, 0, 0, 0.2)', borderRadius: '20px' } : {}}
    >
      <img src={data.imageURL} alt={data.name} width={100} height={100} />
      <h2 className={classes.name}>{data.name}</h2>
      <h3 className={classes.price}>{data.price}</h3>
      <p className={classes.desc}>{data.desc}</p>
      <div className={classes.actions}>
        <button onClick={handleAddToCart} title='Add to Cart'>➕</button>
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