import { useContext } from 'react';
import { EPages } from '../../enums';
import './header.css';
import { CartContext } from '../../providers/cart-provider';
import { NavLink } from 'react-router';


const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <header className='header'>
      <h1>This is header</h1>
      <nav>
        <ul className="main-nav">
          <li><NavLink className={({isActive}) => isActive ? 'active' : ''} to={`/${EPages.CATEGORIES}`}>Categories</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? 'active' : ''} to={`/${EPages.LIST}`}>Products List</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? 'active' : ''} to={`/${EPages.WISH}`}>Wish List</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? 'active' : ''} to={`/${EPages.ADD}`}>Add Product</NavLink></li>
        </ul>
      </nav>
      <span className='cart'>🛒<sup>{cart.length}</sup></span>
    </header>
  )
};

export default Header;