import logo from "./logo.svg";
import "./App.css";

function App() {
  // Create state to store username and password here. Hint: import {useState} from 'react';

  function handleInputChange(e) {
    // Add code here
    /*
      e.target.name will show either "username" or "pwd", 
      so you will know which input field it is handling currently.
     */
    console.log(e.target.name);
  }

  function handleSubmit() {
    // Add code here
    // Use window.alert() function to show the value of username and password
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
