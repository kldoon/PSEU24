import { EPages } from '../../enums';
import './header.css';
import { NavLink } from 'react-router';
import useHeader from '../../hooks/header.hook';
import useAuth from '../../hooks/auth.hook';


const Header = () => {
  const { showAdd, showLogout, cart } = useHeader();
  const { logout } = useAuth();

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
            showAdd && <li>
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
          showLogout
            ? <NavLink className="logout" onClick={logout} to={`/${EPages.HOME}`} >🏃‍♀️‍➡️<b>Logout</b></NavLink>
            : <NavLink className="logout" onClick={logout} to={`/user/${EPages.LOGIN}`} >👤<b>Login</b></NavLink>
        }
      </div>
    </header >
  )
};

export default Header;