import React from 'react'

export const TaskCard = ({task, handleDelete}) => {
    return (
        <li key={task.id} className={task.completed ? "completed" : "incomplete"}>
            <span>{task.id} - {task.name}</span>
            <p>{task.completed}</p>
            <button onClick={() => handleDelete(task.id)} className="delete">Delete</button>
        </li>
    )
}
