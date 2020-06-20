import React from 'react';
import logo from './logo.svg';
import './App.css';
import HookCounter from './Components/HookCounter';
import HookCounterTwo from './Components/HookCounterTwo';

function App() {
  return (
    <div className="App">
      {/* <HookCounter /> */}
      <HookCounterTwo />
    </div>
  );
}

export default App;

// git push -u origin master