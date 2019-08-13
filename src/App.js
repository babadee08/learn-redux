import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './actions';
import { decrement } from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const loggedIn = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch();
  return (

    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {loggedIn ? <h3>Valueable infromation that you shouldn't see</h3> : ''}
    </div>
  );
}

export default App;
