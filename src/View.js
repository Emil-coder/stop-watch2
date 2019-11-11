import React from 'react';
import useModelState from "./Model";


const initialState = {
  running: false,
  time: 0
};


const View = () => {
  const { modelState, handleStart, handleStop, handleReset } = useModelState(initialState);
  console.log('Inside View');
  console.log(modelState);
  let totalSeconds = modelState.time;

  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds - (minutes * 60);
  let secondsFormatted = `${seconds < 10 ? '0' : ''}${seconds}`;

  return (
    <div className="App">
      <div id="timer">{minutes}:{secondsFormatted}</div>
      <button class="btn btn-success" onClick={handleStart}>Start Timer:</button>
      <button class="btn btn-danger" onClick={handleStop}>Stop</button>
      <button class="btn btn-dark" onClick={handleReset}>Reset</button>
    </div>
  );
};

export default View;