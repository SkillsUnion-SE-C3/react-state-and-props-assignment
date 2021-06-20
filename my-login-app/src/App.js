import logo from "./logo.svg";
import "./App.css";

/*
  Brief

  In this lab session, you need to work on the following tasks:
  1. Define a state variable that stores user input - username & password.
  2. Implement "handleInputChange" function to change the state.
  3. When submit button is clicked, use window.alert() to show the value of the state.

  Look out for "Add code here" for implementation.
*/

function App() {
  // Add code here
  // Task 1 - Create state to store username and password here. Hint: import {useState} from 'react';

  function handleInputChange(e) {
    // Add code here
    /*
      Task 2:
      e.target.name will show either "username" or "pwd", 
      so you will know which input field it is handling currently.
     */
    console.log(e.target.name);
  }

  function handleSubmit() {
    // Add code here
    // Task 3 - Use window.alert() function to show the value of username and password
  }

  return (
    <>
      <input
        type="text"
        name="username"
        placeholder="username"
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="pwd"
        placeholder="password"
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Login</button>
    </>
  );
}

export default App;
