import React from 'react';
import logo from './logo.svg';
import './App.css';
import HookCounter from './Components/HookCounter';
import HookCounterTwo from './Components/HookCounterTwo';
import HookCounterThree from './Components/HookCounterThree';
import HookCounterFour from './Components/HookCounterFour';

function App() {
  return (
    <div className="App">
      <br /><br />
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      <HookCounterFour />
    </div>
  );
}

export default App;

// git push -u origin master