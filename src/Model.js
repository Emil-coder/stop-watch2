import React, { useEffect, useState } from 'react';
import Intents from './Intents';

const useModelState = (initialState) => {

  const [modelState, setModelState] = useState(initialState);

  function handleStart() {
    console.log('handleStart triggered');
    update(modelState, Intents.START);
  }

  function handleStop() {
    console.log('handleStop triggered');
    update(modelState, Intents.STOP);
  }

  function handleReset() {
    console.log('handleReset triggered');
    update(modelState, Intents.RESET);
  }

  //{ ...model, running: true } === object.assign(model, {running:true})
  const update = (model, intent) => {
    const updates = {
      'START': (model) => setModelState({ ...model, running: true }),
      'STOP': (model) => setModelState({ ...model, running: false }),
      'TICK': (model) => setModelState({ ...model, time: model.time + (model.running ? 1 : 0) }),
      'RESET': () => setModelState({ ...initialState })
    };
    return updates[intent](model);
  };

  useEffect(() => {
    const timerId = setTimeout(() => { update(modelState, Intents.TICK) }, 1000);
    return () => clearTimeout(timerId);
  });


  return { modelState, handleStart, handleStop, handleReset };
}

export default useModelState;


