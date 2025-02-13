import './App.css';

const Header = () => {
  return (
    <header className='header'>
      This is header
    </header>
  )
};

const Category = () => {
  return (
    <div className='category'>
      This is Category
    </div>
  );
}


const Categories = () => {
  return (
    <div className='categories'>
      This is Categories
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores nemo saepe voluptas cupiditate cumque consectetur placeat temporibus ex eos. Aperiam vero saepe dignissimos magni ipsa! Quo dicta omnis deserunt esse.</p>
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
    </div>
  );
}

function App() {

  return (
    <div>
      <Header />
      <Categories />
    </div>
  )
}

export default App;