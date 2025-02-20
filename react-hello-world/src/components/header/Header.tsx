import './header.css';

const Header = ({ productsCount }: { productsCount: number }) => {
  return (
    <header className='header'>
      <h1>This is header</h1>
      <span>We have <b>{productsCount}</b> Products available</span>
    </header>
  )
};

export default Header;