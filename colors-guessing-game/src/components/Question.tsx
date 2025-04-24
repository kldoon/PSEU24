import { useContext } from 'react';
import ColorsCard from './ColorsCard'
import classes from './styles.module.css';
import { GameContext } from '../provider/gameProvider';

const Question = () => {
  const { data, dispatch } = useContext(GameContext);

  return (
    <div>
      <ColorsCard colors={data.win ? data.trueAnswer : undefined} />
      {
        data.win && (
          <div className={classes.winBlock}>
            <span className={classes.correct}>Correct Answer!</span>
            <button
              className={classes.playAgain}
              onClick={() => dispatch({ type: 'new-game' })}
            >
              Play again
            </button>
          </div>
        )
      }
    </div>
  )
}

export default Question;