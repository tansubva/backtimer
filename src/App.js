import './App.css';
import CountdownTimer from './components/Timer';
import { getRemainingTimeStampMs} from './components/Utils'

function App() {
  return (
      <div className='container'> 
        <h1>BIG SALE ON LIFETIME PLAN</h1>
        <h4>there is very little left</h4>
        <CountdownTimer countdownTimestampMs={1689000050000}/>
      </div>
  );
}

export default App;
