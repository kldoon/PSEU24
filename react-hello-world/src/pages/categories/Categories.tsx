import { useState } from 'react';
import './categories.css';
import Category from "../../components/category/Category";
import { ECategory } from '../../enums';

const data: Store.ICategory[] = [
  {
    id: 'e1',
    title: ECategory.AUTOMATION_KITS,
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S9991322d10a744e792870bdc406962edu.jpg_Q90.jpg_.webp",
    link: ECategory.AUTOMATION_KITS
  },
  {
    id: 'e2',
    title: ECategory.CAMERA_DRONES,
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S754fffa2c4264f5a96bf8d077c51bfde2.png_.webp",
    link: ECategory.CAMERA_DRONES
  },
  {
    id: 'e3',
    title: ECategory.DIGITAL_CAMERAS,
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S6c42eb2cd52f455fb23aef90fd6bd9787.png_.webp",
    link: ECategory.DIGITAL_CAMERAS
  },
  {
    id: 'e4',
    title: ECategory.SMART_HOME,
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S124519a1539643de9adadebb5a09ad4ct.jpg_Q90.jpg_.webp",
    link: ECategory.SMART_HOME
  },
  {
    id: 'e5',
    title: ECategory.LENSES_ACCESSORIES,
    link: ECategory.LENSES_ACCESSORIES
  }
];

const CategoriesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleVisit = (title: string) => {
    setSelectedCategory(title);
  };

  return (
    <div className="categories">
      <h2>Categories</h2>
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

export default CategoriesPage;