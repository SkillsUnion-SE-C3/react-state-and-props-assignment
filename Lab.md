[<img src="assets/images/su-logo.png" alt="Skills Union Logo" height="80px" />](https://www.skillsunion.com/)

# React Props & State: Lab

## Brief

Create a new app by using the following command in terminal/command prompt:

```
npx create-react-app my-login-app
```

Modify `App.js` by changing it's JSX with the following snippet:

```js
return (
  <>
    <input type="text" name="username" onChange={handleInputChange} />
    <input type="password" name="pwd" onChange={handleInputChange} />
    <button onClick={handleSubmit}>Login</button>
  </>
);
```
