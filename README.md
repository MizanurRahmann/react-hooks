## What are Hooks?
Hooks are a new feature addition in React version 16.8 which allow you to use React features without having to write a classs.\
Ex: State of a component.
- Hooks don't work inside class.
- Completely opt in.
- Hooks don't contain any breaking changes and the release is 100% backwards-compatible.
- Hooks provide a more direct API to the React concepts you already know.


## Reles of Hooks
**1. Only call Hooks at the Top Level >** Dont call Hooks inside loops, conditions, or nested functions.\
**2. Only call Hooks from React-Function >** Call them from within React functional components and not just any regular JavaScript functions.

### 1. useState Hook:
- The useState hook lets you add state to functional components.
- In classes, the state is always object.
- With the useState hook, the state doesn't have to be an object.
- The useState hook returns an array with 2 elements.
- New state value depends on the previous state value. You can pass a functions to the setter function.
- When dealing with objects or arrays, always make sure to support your state variable and then call the setter function.

### 2. useEffect Hook:
The Effect Hook let you perform **side effect** in **functional components**.\
It is a close replacement for **componentDidMount, componentDidUpdate**  and **componentWillUnmount**

### 3. useContext:
**Context:** Context provides a way to pass data through the component tree without having to pass props down manually at every level.


### 4. useReducer vs useState:
| Scenario | useState | useReducer |
|---------|-------------|-----------|
| Type of state | Number, String, Boolean | Object or Array |
| Number of state transitions | One or two | Too many |
| Related state transitions |No |Yes |
| Business logic | No business logic | Complex business logic |
| Local vs Global | Local | Global |