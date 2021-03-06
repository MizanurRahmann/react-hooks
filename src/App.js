import React, {useReducer} from 'react';
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
import UserComponetC from './Components/UserComponentC';
import CounterOne from './Components/CounterOne';
import CounterTwo from './Components/CounterTwo';
import CounterThree from './Components/CounterThree';
import ComponentA from './Components/ComponentA';
import ComponentB from './Components/ComponentB';
import ComponentC from './Components/ComponentC';
import DataFetchingOne from './Components/DataFetchingOne';
import DataFetchingTwo from './Components/DataFetchingTwo';
import ParentComponent from './Components/useCallback/ParentComponent';
import Counter from './Components/useMemo/Counter';
import FocusInput from './Components/useRef/FocusInput';
import ClassTimer from './Components/useRef/ClassTimer';
import HookTimer from './Components/useRef/HookTimer';
import DocTitleOne from './Components/CustomHooks/DocTitleOne';
import DocTitleTwo from './Components/CustomHooks/DocTitleTwo';
import CounterOnec from './Components/CustomHooks/CounterOnec';
import CounterTwoc from './Components/CustomHooks/CounterTwoc';
import UserForm from './Components/CustomHooks/UserForm';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

export const CountContext = React.createContext();

// const initialState = 0;
// const reducer = (state, action) => {
//     switch(action){
//         case 'Increament':
//             return state + 1;
//         case 'Decreament':
//             return state - 1;
//         case 'Reset':
//             return initialState;
//         default:
//             return state;
//     }
// }


function App() {
  // const [count, dispatch] = useReducer(reducer, initialState);
  

  return (
    // <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
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
        {/* <DataFetching /> */}
        {/* <UserContext.Provider value={"Azox"}>
          <ChannelContext.Provider value={"New-World"}>
            <UserComponetC />
          </ChannelContext.Provider>
        </UserContext.Provider> */}

        {/* <CounterOne /> */}
        {/* <CounterTwo /> */}
        {/* <CounterThree /> */}
      
        {/* Count - {count}
        <ComponentA /> <br />
        <ComponentB /> <br />
        <ComponentC /> <br /> */}

        {/* <DataFetchingOne /> */}
        {/* <DataFetchingTwo /> */}

        {/* <ParentComponent /> */}

        {/* <Counter /> */}

        {/* <FocusInput /> */}
        
        {/* <ClassTimer />
        <HookTimer /> */}
        {/* <DocTitleOne />
        <DocTitleTwo /> */}
        {/* <CounterOnec />
        <CounterTwoc /> */}
        <UserForm />
        </div>  
    // </CountContext.Provider>
  );
}

export default App;

// git push -u origin master