import { useCallback, useEffect, useMemo, useReducer, useRef } from 'react';
import './App.css';
import reducer from './reducers/reducer';
import { IState } from './@types';
import AntdExample from './AntdExample';

const initialState: IState = { counter: 0, counter2: 10, counter3: 90 };

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  let xx = 0;
  const counter4 = useRef(0);

  // const x = Math.pow(state.counter, state.counter2);
  const x = useMemo(() => {
    // console.log('Calculating...');
    return Math.pow(state.counter, state.counter3);
  }, [state.counter, state.counter3]);
  console.log("Result: ", x);

  const handleCounter4 = () => {
    xx++;
    console.log(xx);

    counter4.current += 1;
    console.log(counter4);
  }

  useEffect(() => {
    console.log("counter4.current from use Effect");
    console.log(counter4.current);

    if (counter4.current >= 10) {
      console.log("resetting...");
      dispatch({ type: 'reset' });
    }
  }, [counter4.current]);

  const calc = useCallback(() => {
    console.log("Calculating...");
    const r = 10 + 20;
    console.log(r);
  }, []);

  useEffect(() => {
    console.log("Calculating... from use Effect");
    calc();
  }, [calc]);

  return (
    <div>
      <AntdExample />
      {/* <h1>Counter App (Reducer)</h1>
      <h2>{state.counter} | {state.counter2} | {state.counter3} | Calc {x} | Counter4 {counter4.current}</h2>
      <div className="card">
        <button onClick={() => {
          if (state.counter + 1 >= 10) {
            //reset
          }
          dispatch({ type: 'increment' })
        }}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: 'decrement' })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: 'reset' })}>
          Reset
        </button>
        <button onClick={handleCounter4}>
          Counter 4
        </button>
        <input
          type="number"
          onChange={(v) => dispatch({ type: 'set-value', payload: Number(v.currentTarget.value) })}
        />
      </div> */}
    </div>
  )
}

export default App
