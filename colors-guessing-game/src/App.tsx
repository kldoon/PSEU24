import classes from './App.module.css';
import AnswerForm from './components/AnswerForm';
import Header from './components/Header';
import History from './components/History';
import Question from './components/Question';
import GameProvider from './provider/gameProvider';

function App() {
  return (
    <GameProvider>
      <div className={classes.main}>
        <Header />
        <Question />
        <hr />
        <History />
        <AnswerForm />
      </div>
    </GameProvider>
  )
}

export default App
