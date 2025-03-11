import { EPages } from '../../enums';
import './header.css';

interface IProps {
  productsCount: number;
  onNavigate: (page: EPages) => void;
  currentPage: string;
}
const Header = ({ productsCount, onNavigate, currentPage }: IProps) => {
  return (
    <header className='header'>
      <h1>This is header</h1>
      <nav>
        <ul className="main-nav">
          <li className={currentPage === EPages.CATEGORIES ? 'active' : ''} onClick={() => onNavigate(EPages.CATEGORIES)}>Categories</li>
          <li className={currentPage === EPages.LIST ? 'active' : ''} onClick={() => onNavigate(EPages.LIST)}>Products List</li>
          <li className={currentPage === EPages.WISH ? 'active' : ''} onClick={() => onNavigate(EPages.WISH)}>Wish List</li>
          <li className={currentPage === EPages.ADD ? 'active' : ''} onClick={() => onNavigate(EPages.ADD)}>Add Product</li>
        </ul>
      </nav>
      <span>We have <b>{productsCount}</b> Products available</span>
    </header>
  )
};

export default Header;