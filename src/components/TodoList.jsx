import React from 'react'

export default function TodoList({ onToggle, tasks, onDelete }) {
    return (
        <div>
            {tasks.map((task, index) => {
                return (
                    <div key={task.id}>
                        <input
                            type="checkbox"
                            style={{ marginRight: "3px" }}
                            onClick={(e) => onToggle(e, index)}
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
        </div>)
}
