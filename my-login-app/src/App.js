import "./App.css";
import { useState } from "react";
import Image from "./Image";

/*
  Brief

  In this lab session, you need to work on the following tasks:
  
  1. Implement "handleUsernameChange" function to change the state declared as "username".
  2. Implement "handlePasswordChange" function to change the state declared as "password".
  3. When submit button is clicked, use window.alert() to show the values of username and password states.
  4. Have a look at Image.js file. As you can see it is expecting a prop for image url 
     If you pass it corrctly from the App.js you should be able to see that image rendered on the page. 
  Look out for "Add code here" for implementation.
*/

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }

  function handleSubmit() {
    window.alert(`Username: ${username}
Password: ${password}`)
  }

  return (
    <div className="App">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="username"
        onChange={handleUsernameChange}
      />
      <input
        type="password"
        placeholder="password"
        onChange={handlePasswordChange}
      />
      <button onClick={handleSubmit}>Login</button>
      {/* Add code below for task 4 */}
      <Image imgUrl="https://picsum.photos/200/300"/>
    </div>
  );
}

export default App;
