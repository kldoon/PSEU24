import { useContext } from 'react';
import { EPages } from '../../enums';
import './header.css';
import { CartContext } from '../../providers/cart-provider';
import { NavLink } from 'react-router';
import { readData, removeData } from '../../utils/storage';

const Header = () => {
  const { cart } = useContext(CartContext);
  const user: Store.IUser = readData('sarah-express-user');

  return (
    <header className='header'>
      <h1>Sarah Express</h1>
      <nav>
        <ul className="main-nav">
          <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to={`/${EPages.HOME}`}>Home</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to={`/${EPages.CATEGORIES}`}>Categories</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to={`/${EPages.LIST}`}>Products List</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to={`/${EPages.WISH}`}>Wish List</NavLink></li>
          {
            user?.role === 'admin' && <li>
              <NavLink
                className={({ isActive }) => isActive ? 'active' : ''}
                to={`/${EPages.ADD}`}
              >
                Add Product
              </NavLink>
            </li>
          }
        </ul>
      </nav>
      <div>
        <NavLink className='cart' to={`/${EPages.CART}`}>🛒<sup>{cart.length}</sup></NavLink>
        {
          user && <NavLink className="logout" onClick={() => removeData('sarah-express-user')} to={`/${EPages.HOME}`} >🏃‍♀️‍➡️<sup>Logout</sup></NavLink>
        }
      </div>
    </header >
  )
};

export default Header;