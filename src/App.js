import React from 'react';
import logo from './logo.svg';
import './App.css';
import HookCounter from './Components/HookCounter';
import HookCounterTwo from './Components/HookCounterTwo';
import HookCounterThree from './Components/HookCounterThree';
import HookCounterFour from './Components/HookCounterFour';
import UseEffectOne from './Components/UseEffectOne';
import HookMouse from './Components/HookMouse';
import MouseContainer from './Components/MouseContainer';
import IntervalClassCounter from './Components/IntervalClassCounter';
import IntervalHookCuounter from './Components/IntervalHookCuounter';
import DataFetching from './Components/DataFetching';

function App() {
  return (
    <div className="App">
      <br /><br />
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <UseEffectOne /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalClassCounter />
      <IntervalHookCuounter /> */}
      <DataFetching />
    </div>
  );
}

export default App;

// git push -u origin master