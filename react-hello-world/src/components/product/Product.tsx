import './product.css';

interface IProps {
  data: Store.IProduct;
  onWish: (id: number) => void;
  onDelete: () => void;
}

const Product = (props: IProps) => {
  const { data } = props;

  return (
    <div className="product">
      <img src={data.imageURL} alt={data.name} width={100} height={100} />
      <h2 className="name">{data.name}</h2>
      <h3 className="price">{data.price}</h3>
      <p className="desc">{data.desc}</p>
      <div className="actions">
        <button onClick={() => { props.onWish(data.id) }}>❤️ {data.wishListCounter}</button>
        <button onClick={props.onDelete}>🗑️</button>
      </div>
    </div>
  )
}

export default Product;