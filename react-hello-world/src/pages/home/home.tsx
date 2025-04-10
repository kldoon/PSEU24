import classes from './home.module.css';

interface IProps { }

const HomePage = () => {

  return (
    <div className={classes.wishList}>
      <h1>Sarah Express</h1>
      <p>Home page</p>
    </div>
  )
}

export default HomePage;