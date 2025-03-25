import classes from './not-found.module.css';

const NotFound = () => {
  return (
    <div className={classes.wrapper}>
      <p>
        The page You have requested is
      </p>
      <img src='/assets/404.png' width={400} />
      <h2>NOT FOUND 404</h2>
    </div>
  )
}

export default NotFound;