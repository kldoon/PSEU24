import './category.css';

interface IProps {
  title: string;
  image?: string;
}

const DEFAULT_IMAGE = 'https://ae-pic-a1.aliexpress-media.com/kf/S87ca085f4d5e49c88b71acecf9c2911ce.png_.webp';

const Category = (props: IProps) => {
  return (
    <div className="category">
      {props.title}
      <hr />
      {
        Boolean(props.image)
          ? <img src={props.image} width={150} height={100} alt="cat image" />
          : <img src={DEFAULT_IMAGE} width={150} height={100} alt="cat image" />
      }
    </div>
  );
}

export default Category;
