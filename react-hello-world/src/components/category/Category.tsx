import './category.css';

const Category = () => {
  const title = "This is a category";
  let catNo = 2;
  let catImage = 'https://ae-pic-a1.aliexpress-media.com/kf/S9991322d10a744e792870bdc406962edu.jpg_Q90.jpg_.webp';

  return (
    <div className="category">
      {title.toUpperCase()} {catNo === 1 ? 'One' : (catNo === 2 ? 'Two' : 'Zero')}
      <hr />
      {
        // Boolean(catImage) ? <img src={catImage} width={150} height={110} alt="cat image" /> : null
        Boolean(catImage) && <img src={catImage} width={150} height={100} alt="cat image" />
      }

    </div>
  );
}

export default Category;
