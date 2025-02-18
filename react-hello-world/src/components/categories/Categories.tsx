import { ICategory } from '../../types';

import './categories.css';
import Category from "../category/Category";
import { useState } from 'react';

const data: ICategory[] = [
  {
    id: 'e1',
    title: "Automation Kits",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S9991322d10a744e792870bdc406962edu.jpg_Q90.jpg_.webp",
    link: ''
  },
  {
    id: 'e2',
    title: "Camera Drones",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S754fffa2c4264f5a96bf8d077c51bfde2.png_.webp",
    link: ''
  },
  {
    id: 'e3',
    title: "Digital Cameras",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S6c42eb2cd52f455fb23aef90fd6bd9787.png_.webp",
    link: ''
  },
  {
    id: 'e4',
    title: "Smart Home",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S124519a1539643de9adadebb5a09ad4ct.jpg_Q90.jpg_.webp",
    link: ''
  },
  {
    id: 'e5',
    title: "Lenses & Accessories",
    link: ''
  }
];

const Categories = () => {
  console.log("Categories Rendered");

  const [selectedCategory, setSelectedCategory] = useState('');
  // let selectedCategory = "";

  const handleVisit = (title: string) => {
    console.log("Visit button has been clicked! " + title);
    // selectedCategory = title;
    setSelectedCategory(title);
  };

  return (
    <div className="categories">
      This is Categories
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores nemo saepe voluptas cupiditate cumque consectetur placeat temporibus ex eos. Aperiam vero saepe dignissimos magni ipsa! Quo dicta omnis deserunt esse.</p>
      <div className="list">
        {
          data.map(cat => (
            <Category
              key={cat.id}
              title={cat.title}
              image={cat.image}
              onVisit={handleVisit}
            />
          ))
        }
      </div>
      <h3>Selected Category: {selectedCategory}</h3>
    </div>
  );
}

export default Categories;