import { useReducer } from 'react';
import './App.css';
import reducer from './reducers/reducer';
import { IState } from './@types';

const initialState: IState = { counter: 0, counter2: 10, counter3: 90 };

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>Counter App (Reducer)</h1>
      <h2>{state.counter} | {state.counter2} | {state.counter3}</h2>
      <div className="card">
        <button onClick={() => dispatch({ type: 'increment' })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: 'decrement' })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: 'reset' })}>
          Reset
        </button>
        <input
          type="number"
          onChange={(v) => dispatch({ type: 'set-value', payload: Number(v.currentTarget.value) })}
        />
      </div>
    </>
  )
}

export default App
