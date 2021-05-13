import React, { useState } from "react";
import Task from "./Task";

function TodoContainer(props) {
  const defaultTasks = [
    {
      id: 1,
      title: "Task 1",
      description: "Do something...",
      isDone: false,
    },
    {
      id: 2,
      title: "Task 2",
      description: "Do something...",
      isDone: false,
    },
    {
      id: 3,
      title: "Task 3",
      description: "Do something...",
      isDone: false,
    },
  ];
  const [tasks, setTasks] = useState(defaultTasks);

  const handleToggleDone = (taskId, isDone) => {
    console.log("fire");
    const completedTasks = tasks.map((t) => {
      if (t.id === taskId) {
        t.isDone = !isDone;
      }
      return t;
    });

    setTasks(completedTasks);
  };

  return (
    <div id="todo-container">
      <ul>
        {tasks.map((t) => (
          <Task key={t.id} task={t} toggleDone={handleToggleDone} />
        ))}
      </ul>
      <div>Count: 3</div>
    </div>
  );
}

export default TodoContainer;
