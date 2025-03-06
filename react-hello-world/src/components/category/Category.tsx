import { useEffect, useState } from 'react';
import './category.css';
import { getCatKey } from '../../utils/common';

interface IProps {
  title: string;
  image?: string;
  onVisit: (title: string) => void;
}

const DEFAULT_IMAGE = 'https://ae-pic-a1.aliexpress-media.com/kf/S87ca085f4d5e49c88b71acecf9c2911ce.png_.webp';

const Category = (props: IProps) => {
  const [counter, setCounter] = useState<number>(0);

  // This is a code that will run only one time when the component is mounted
  useEffect(() => {
    console.log(`Category mounted: ${props.title}`);
    const storedCounter = localStorage.getItem(getCatKey(props.title)) || '0';
    setCounter(Number(storedCounter));
  }, []);

  useEffect(() => {
    return () => {
      // The code here will be run only once when the component is unmounted!
    }
  }, []);

  const handleCounter = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
    localStorage.setItem(getCatKey(props.title), newCounter.toString());
    props.onVisit(props.title);
  }

  return (
    <div className="category">
      <h2>
        {props.title}
      </h2>
      {
        Boolean(props.image)
          ? <img src={props.image} width={150} height={100} alt="cat image" />
          : <img src={DEFAULT_IMAGE} width={150} height={100} alt="cat image" />
      }
      <div className="actions">
        <button
          onClick={handleCounter}
        >
          Visit
        </button>
        <small>Visited: {counter} times</small>
      </div>
    </div>
  );
}

export default Category;
