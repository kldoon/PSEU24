import { useContext } from 'react';
import classes from './styles.module.css';
import { GameContext } from '../provider/gameProvider';

const Header = () => {
  const { data } = useContext(GameContext);

  return (
    <div className={classes.header}>
      <h1>Colors Game</h1>
      <h2>
        Steps: {data.history.length}
      </h2>
    </div>
  )
}

export default Header