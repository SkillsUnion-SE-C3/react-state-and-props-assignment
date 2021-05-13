import React from "react";

function Task(props) {
  const handleOnChange = () => {
    props.toggleDone(props.task.id, props.task.isDone);
  };
  return (
    <li>
      <input type="checkbox" onChange={handleOnChange} />
      <span
        style={props.task.isDone ? { textDecorationLine: "line-through" } : {}}
      >
        {props.task.title} - {props.task.description}
      </span>
    </li>
  );
}

export default Task;
