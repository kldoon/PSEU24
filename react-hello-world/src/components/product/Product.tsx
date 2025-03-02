import classNames from 'classnames';
import classes from './product.module.css';

interface IProps {
  data: Store.IProduct;
  isWishList: boolean;
  onWish: (id: number) => void;
  onDelete: () => void;
}

const Product = (props: IProps) => {
  const { data } = props;

  return (
    <div
      className={classes.product}
      // Conditional styling (full object with multi attributes)
      style={props.isWishList ? { boxShadow: '0 4px 8px rgba(255, 0, 0, 0.2)', borderRadius: '20px' } : {}}
    // Conditional styling (each attribute independently)
    // style={{
    //   boxShadow: props.isWishList
    //     ? '0 4px 8px rgba(255, 0, 0, 0.2)'
    //     : '0 4px 8px rgba(0, 0, 0, 0.1)',
    //   borderRadius: props.isWishList ? '20px' : '8px'
    // }}
    >
      <img src={data.imageURL} alt={data.name} width={100} height={100} />
      <h2 className={classes.name}>{data.name}</h2>
      <h3 className={classes.price}>{data.price}</h3>
      <p className={classes.desc}>{data.desc}</p>
      <div className={classes.actions}>
        <button
          // Conditional classname, if the isWishList = true then add a class name called wishList to the button
          // className={`${classes['wish-button']} ${props.isWishList ? classes.wishList : ""}`}
          className={classNames(classes['wish-button'], props.isWishList && classes.wishList)}
          onClick={() => { props.onWish(data.id) }}
          disabled={props.isWishList}
        >❤️ {data.wishListCounter}
        </button>
        <button onClick={props.onDelete}>🗑️</button>
      </div>
    </div >
  )
}

export default Product;