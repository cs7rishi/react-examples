import { useState } from "react";
import "./App.css"

//Use State with Arrays
export const App2 = () => {

    let [tasks, setTasks] = useState([
        { id: 5271, name: "Record React Lectures", completed: true },
        { id: 7825, name: "Edit React Lectures", completed: false },
        { id: 8391, name: "Watch Lectures", completed: false }
    ]);

    function handleDelete(id){
        setTasks(tasks.filter(t => t.id !== id));
    }

    return (
        <div className="App">
            <h1>Task List</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <span>{task.id} - {task.name}</span>
                        <p>{task.completed}</p>
                        <button onClick={() => handleDelete(task.id)} className="delete">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

//Use State with Variables
export const App = () => {
    let [count, setCount] = useState(0);

    function handleAdd() {
        setCount(count => count + 1);
        setCount(count => count + 1);
        setCount(count => count + 1);
    }

    function handleSub() {
        setCount(count - 1);
    }

    function handleReset() {
        setCount(0);
    }

    return (
        <div className='App'>
            <div className="box">
                <p>{count}</p>
                <button className="add" onClick={handleAdd}>ADD</button>
                {/* <button className="add" onClick={() => count+=1}>ADD</button> */}
                <button className="sub" onClick={handleSub}>SUB</button>
                <button className="reset" onClick={handleReset}>RESET</button>
            </div>
        </div>
    )
}

// export default function App(){
//     return React.createElement("h1", {className: "active"}, "Rishi")
// }


