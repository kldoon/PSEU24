import './header.css';

interface IProps {
  productsCount: number;
  onNavigate: (page: string) => void;
  currentPage: string;
}
const Header = ({ productsCount, onNavigate, currentPage }: IProps) => {
  return (
    <header className='header'>
      <h1>This is header</h1>
      <nav>
        <ul className="main-nav">
          <li className={currentPage === 'categories' ? 'active' : ''} onClick={() => onNavigate('categories')}>Categories</li>
          <li className={currentPage === 'list' ? 'active' : ''} onClick={() => onNavigate('list')}>Products List</li>
          <li className={currentPage === 'wish' ? 'active' : ''} onClick={() => onNavigate('wish')}>Wish List</li>
          <li className={currentPage === 'add' ? 'active' : ''} onClick={() => onNavigate('add')}>Add Product</li>
        </ul>
      </nav>
      <span>We have <b>{productsCount}</b> Products available</span>
    </header>
  )
};

export default Header;