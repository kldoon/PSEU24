import './categories.css';

import Category from "../category/Category";

const Categories = () => {
  return (
    <div className='categories'>
      This is Categories
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores nemo saepe voluptas cupiditate cumque consectetur placeat temporibus ex eos. Aperiam vero saepe dignissimos magni ipsa! Quo dicta omnis deserunt esse.</p>
      <div className="list">
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </div>
  );
}

export default Categories;