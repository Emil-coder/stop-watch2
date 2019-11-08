import React, { useEffect, useState } from 'react';
import './App.css';
// import Intents from './Intents';
import Model from './Model';
import View from './View';

const model = {
  running: false,
  time: 0
};


const App = () => {

  // const [modelState, setModelState] = useState(model);

  // let view = (model) => {
  //   let minutes = Math.floor(modelState.time / 60);
  //   let seconds = modelState.time - (minutes * 60);
  //   let secondsFormatted = `${seconds < 10 ? '0' : ''}${seconds}`;

  //   return (
  //     <div className="App">
  //       <div id="timer">{minutes}:{secondsFormatted}</div>
  //       <button class="btn btn-success" onClick={handleStart}>Start Timer:</button>
  //       <button class="btn btn-danger" onClick={handleStop}>Stop</button>
  //       <button class="btn btn-dark" onClick={handleReset}>Reset</button>
  //     </div>
  //   );
  // };

  // function handleStart() {
  //   update(modelState, Intents.START);
  // }

  // function handleStop() {
  //   update(modelState, Intents.STOP);
  // }

  // function handleReset() {
  //   update(modelState, Intents.RESET);
  // }


  // const update = (model, intent) => {
  //   const updates = {
  //     'START': (model) => setModelState({ ...modelState, running: true }),
  //     'STOP': (model) => setModelState({ ...modelState, running: false }),
  //     'TICK': (model) => setModelState({ ...modelState, time: modelState.time + (modelState.running ? 1 : 0) }),
  //     'RESET': (model) => setModelState({ running: false, time: 0 })
  //   };
  //   return updates[intent](model);
  // };


  // useEffect(() => {
  //   const timerId = setTimeout(() => { update(modelState, Intents.TICK) }, 1000);
  //   return () => clearTimeout(timerId);
  // });

  return (
    // view(model)
    <View />
  );
}

export default App;
