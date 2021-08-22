import Stopwatch from './component/Stopwatch'
import './App.css'

function App() {

  return (
    <div className="App">
      <h1>Kronos ~ Your go to time app!</h1>
      <div class="Timers">
      <Stopwatch />
      <Stopwatch />
      <Stopwatch />
      </div>
    </div>
  );
}

export default App;
