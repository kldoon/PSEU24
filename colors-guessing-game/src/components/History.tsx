import { useContext } from "react";
import { GameContext } from "../provider/gameProvider";
import ColorsCard from "./ColorsCard";
import classes from './styles.module.css';

const History = () => {
  const { data } = useContext(GameContext);

  return (
    <div className={classes.historyBlock}>
      {
        data.history.map((answer, idx) =>
          <ColorsCard
            key={idx}
            colors={answer.colors}
            stats={answer.stats}
          />
        )

      }
    </div>
  )
}

export default History;