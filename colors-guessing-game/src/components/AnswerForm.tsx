import { useContext, useState } from "react";
import ButtonsCard from "./ButtonsCard"
import ColorsCard from "./ColorsCard"
import classes from './styles.module.css';
import { SIZE } from "../constants/constants";
import { GameContext } from "../provider/gameProvider";

const AnswerForm = () => {
  const { data, dispatch } = useContext(GameContext);
  const [currentAnswer, setCurrentAnswer] = useState<string[]>([]);

  const handleColor = (color: string) => {
    if (data.win) return;

    if (currentAnswer.length < SIZE - 1) {
      setCurrentAnswer(old => ([...old, color]));
    } else {
      dispatch({ type: 'set-answer', payload: [...currentAnswer, color] });
      setCurrentAnswer([]);
    }
  }

  return (
    <div className={classes.answerForm}>
      <ColorsCard colors={currentAnswer} onClear={() => setCurrentAnswer([])} showClear />
      <ButtonsCard onColor={handleColor} />
    </div>
  )
}

export default AnswerForm