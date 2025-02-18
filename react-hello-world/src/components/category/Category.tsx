import { useState } from 'react';
import './category.css';

interface IProps {
  title: string;
  image?: string;
  onVisit: (title: string) => void;
}

const DEFAULT_IMAGE = 'https://ae-pic-a1.aliexpress-media.com/kf/S87ca085f4d5e49c88b71acecf9c2911ce.png_.webp';

const Category = (props: IProps) => {
  console.log("Category Rendered [" + props.title + "]");
  // let counter = 0;
  const [counter, setCounter] = useState<number>(0);

  return (
    <div className="category">
      {props.title}
      <hr />
      {
        Boolean(props.image)
          ? <img src={props.image} width={150} height={100} alt="cat image" />
          : <img src={DEFAULT_IMAGE} width={150} height={100} alt="cat image" />
      }
      <div className="actions">
        <button
          onClick={() => {
            // counter += 1;
            console.log(counter);
            setCounter(counter + 1);
            setCounter(old => old + 1);
            console.log(counter);
            props.onVisit(props.title);
          }}
        >
          Visit
        </button>
        <small>Visited: {counter} times</small>
      </div>
    </div>
  );
}

export default Category;
