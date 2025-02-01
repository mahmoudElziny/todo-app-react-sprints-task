import React, { useState } from "react";

export default function Form() {

  const [tasks, setTasks] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      name: e.target[0].value,
      id: Date.now(),
      done: false,
    };
    setTasks((tasks) => {
      return [...tasks, newTask];
    });
  }

  function handleToggle(e, index) {
    const updatedTask = {
      ...tasks[index],
      done: e.target.checked,
    };
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
  }

  function onDelete(id) {
    setTasks((tasks) => {
      return tasks.filter((task) => task.id !== id);
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Type Your Task"></input>
      <button>Add Task</button>
      <div>
        {tasks.map((task, index) => {
          return (
            <div key={task.id}>
              <input
                type="checkbox"
                style={{ marginRight: "3px" }}
                onClick={(e) => handleToggle(e, index)}
              ></input>
              <p
                style={{ display: "inline-block" }}
                className={task.done ? "done" : ""}
              >
                {task.name}
              </p>
              <button
                style={{ color: "red", marginLeft: "3px" }}
                onClick={(e) => onDelete(task.id)}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </form>
  );
}
