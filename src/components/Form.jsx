import React, { useState } from "react";
import TodoList from "./TodoList";

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
      <TodoList onToggle={handleToggle} tasks={tasks} onDelete={onDelete} />
    </form>
  );
}
