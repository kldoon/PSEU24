import { COLORS } from '../constants/constants';
import classes from './styles.module.css';

interface IProps {
  onColor: (color: string) => void;
}

const ButtonsCard = (props: IProps) => {
  return (
    <div className={classes.buttonsCard}>
      <div className={classes.card}>
        {
          COLORS.map(color =>
            <button
              key={color}
              style={{ backgroundColor: color }}
              onClick={() => props.onColor(color)}
            />
          )
        }
      </div>
    </div>
  )
}

export default ButtonsCard;