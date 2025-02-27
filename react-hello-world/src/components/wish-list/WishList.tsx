import './wish-list.css';

interface IProps {
  wishList: Array<number>;
  productList: Store.IProduct[];
  onRemove: (id: number) => void;
}

const WishList = (props: IProps) => {
  const wishListItems = props.productList.filter(p => props.wishList.includes(p.id));

  return (
    <div className="wish-list">
      <b>Wish List:</b>
      {
        Boolean(wishListItems.length)
          ? <ul>
            {
              wishListItems.map(item => (
                <li>
                  {item.name}
                  <span className="remove" onClick={() => props.onRemove(item.id)}>❌</span>
                </li>
              ))
            }

          </ul>
          : ' No items added to your wish list!'
      }
    </div>
  )
}

export default WishList;