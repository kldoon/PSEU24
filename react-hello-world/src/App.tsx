import './App.css';
import Header from './components/header/Header';
import Categories from './components/categories/Categories';

function App() {
  console.log("App Rendered");

  return (
    <div>
      <Header />
      <Categories />
    </div>
  )
}

export default App;