import React from 'react';
import './App.css'

function App() {
  return (
    <div className="App">
      <div className='stopwatch'>
        <div className='time'>
          00:00:00.00
        </div>
        <div className='buttons'>
          <button className='buttons__button'>Start</button>
          <button className='buttons__button'>Stop</button>
          <button className='buttons__button'>Reset</button>
          <button className='buttons__button'>Lap</button>
          <button className='buttons__button'>Clear laps</button>
        </div>
      </div>
    </div>
  );
}

export default App;
