[<img src="assets/images/su-logo.png" alt="Skills Union Logo" height="80px" />](https://www.skillsunion.com/)

# React Props & State: Lab

## Brief

You may continue working on your own code or use the updated code given in the `./todo-app` folder.

1. Add a new component call `AddTask` that create a new task object and add it to the array (stored in the state) in `TodoContainer`.

2. When an Add button is clicked in `AddTask` component, raise the event to `TodoContainer` so that a new task can be added to the array of tasks.

3. The count for total tasks should reflect the actual size of tasks array.

Tips:

- You can either try to use [useRef](https://reactjs.org/docs/hooks-reference.html#useref)
- Or simply set a default value for `title` and `description` properties
