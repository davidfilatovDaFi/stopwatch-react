import React, { useCallback, useState } from 'react';
import './App.css'

function App() {
  const [time,setTime] = useState({ms:0,sec:0,min:0,hour:0})
  const [interv,setInterv] = useState()
  const [laps,setLaps] = useState([])
  let ms = time.ms,
      sec = time.sec,
      min = time.min,
      hour = time.hour

  const start = () => {
    ms++
    if (ms > 99) {
      sec++
      ms = 0
    }
    if (sec > 59) {
      min++
      sec = 0
    }
    if (min > 59) {
      hour++
      min = 0
    }
    return setTime({ms,sec,min,hour})
  }
  const restart = () => {
    clearInterval(interv)
    setTime({ms:0,sec:0,min:0,hour:0})
  }
  const lapCounter = () => {
    const newLap = {
      lapms:time.ms,
      lapsec:time.sec,
      lapmin:time.min,
      laphour:time.hour
    }
    setLaps([...laps,newLap])
  }

  return (
    <div className="App">
      <div className='stopwatch'>
        <div className='time'>
          <span>{time.hour > 9 ? time.hour : '0' + time.hour}:</span>
          <span>{time.min > 9 ? time.min : '0' + time.min}:</span>
          <span>{time.sec > 9 ? time.sec : '0' + time.sec}.</span>
          <span>{time.ms > 9 ? time.ms : '0' + time.ms}</span>
        </div>
        <div className='buttons'>
          <button onClick={() => {

            setInterv(setInterval(start,10)) 
          }} className='buttons__button'>Start</button>
          <button onClick={() => clearInterval(interv)} className='buttons__button'>Stop</button>
          <button onClick={restart} className='buttons__button'>Restart</button>
          <button onClick={lapCounter} className='buttons__button'>Lap</button>
          <button onClick={() => setLaps([])} className='buttons__button'>Clear laps</button>
        </div>
      </div>
      <div className='laps'>
        {laps.map((lap,i) => 
        <div key={i} className='lap'>
          <span className='lap'>lap {i+1}</span>
          <span>{lap.laphour > 9 ? lap.laphour : '0' + lap.laphour}:</span>
          <span>{lap.lapmin > 9 ? lap.lapmin : '0' + lap.lapmin}:</span>
          <span>{lap.lapsec > 9 ? lap.lapsec : '0' + lap.lapsec}.</span>
          <span>{lap.lapms > 9 ? lap.lapms : '0' + lap.lapms}</span>
        </div>)}
      </div>
    </div>
  );
}

export default App;
