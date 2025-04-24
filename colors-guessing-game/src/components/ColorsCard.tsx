import classes from './styles.module.css';
import { DEFAULT_COLOR, SIZE } from '../constants/constants';

interface IProps {
  colors?: string[];
  stats?: { cr: number, cc: number };
  showClear?: boolean;
  onClear?: () => void;
}

const ColorsCard = (props: IProps) => {

  return (
    <div className={classes.colorsCard}>
      <div className={classes.card}>
        {
          props.showClear && props.onClear && <button
            className={classes.clearBtn}
            onClick={props.onClear}
          >
            x
          </button>
        }
        {
          Array(SIZE).fill(DEFAULT_COLOR).map((color, idx) =>
            <div
              key={idx}
              className={classes.circle}
              style={{ backgroundColor: props.colors?.[idx] || color }}
            />
          )
        }
        {
          props.stats && <div className={classes.stats}>
            CC: <b>{props.stats.cc}</b> <br /> CR: <b>{props.stats.cr}</b>
          </div>
        }
      </div>
    </div >
  )
}

export default ColorsCard