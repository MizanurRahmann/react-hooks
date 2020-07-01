## What are Hooks?
Hooks are a new feature addition in React version 16.8 which allow you to use React features without having to write a classs.\
Ex: State of a component.
- Hooks don't work inside class.
- Completely opt in.
- Hooks don't contain any breaking changes and the release is 100% backwards-compatible.
- Hooks provide a more direct API to the React concepts you already know.


## Rules of Hooks
**1. Only call Hooks at the Top Level >** Dont call Hooks inside loops, conditions, or nested functions.\
**2. Only call Hooks from React-Function >** Call them from within React functional components and not just any regular JavaScript functions.


## 1. useState Hook:
- The useState hook lets you add state to functional components.
- In classes, the state is always object.
- With the useState hook, the state doesn't have to be an object.
- The useState hook returns an array with 2 elements.
- New state value depends on the previous state value. You can pass a functions to the setter function.
- When dealing with objects or arrays, always make sure to support your state variable and then call the setter function.

## 2. useEffect Hook:
The Effect Hook let you perform **side effect** in **functional components**.\
It is a close replacement for **componentDidMount, componentDidUpdate**  and **componentWillUnmount**

## 3. useContext:
**Context :** Context provides a way to pass data through the component tree without having to pass props down manually at every level. To create a context you have to use "React.createContext()"

Accepts a context object and returns the current context value for that context. The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree.

When the nearest <MyContext.Provider> above the component updates, this Hook will trigger a rerender with the latest context value passed to that MyContext provider. Even if an ancestor uses React.memo or shouldComponentUpdate, a rerender will still happen starting at the component itself using useContext.

## 4. useReducer:
An alternative to useState. Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method.\
**useReducer is related to reducers.**
| reducer in JavaScript | useReducer in React|
|---------|-----------|
| array.**reduce**(**reducer**, initialValue) | **useReducer**(**reducer**, initialState)|
|singleValue = reducer(accumulator, itemValue) | newState = reducer(currentState, action)|
|**reduce** method returns a single value| **useReducer** returns a pair of values. [newState, dispath]|

## 5. useReducer vs useState:
| Scenario | useState | useReducer |
|---------|-------------|-----------|
| Type of state | Number, String, Boolean | Object or Array |
| Number of state transitions | One or two | Too many |
| Related state transitions |No |Yes |
| Business logic | No business logic | Complex business logic |
| Local vs Global | Local | Global |

## 6. useCallback Hook
**what?**\
useCallback is a hook that will return a memorized version of the callback function that only changes if one of the dependencies has changed.\
**Why?**\
It is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.\
>But using useCallback is not optilamal always.
To see more [When to useMemo and useCallback](https://kentcdodds.com/blog/usememo-and-usecallback).

## 7. useMemo:
useMemo passes a “create” function and an array of dependencies and only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render.

## 8.Difference between useCallback and useMemo:
useCallback caches the provided function instance itself, where useMemo invokes the provided function and caches its result.\
So, if you need to cache a function use useCallback and if you want to cache the result of a invoked function then use useMemo.

## 9. Custom Hooks
A custom Hook is basically a JavaScript function whose name starts with "use". A custom Hook can call other Hooks if required.
**why? :** Share logic - Alternative to HOCs and Render Props.