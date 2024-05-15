import './App.css';
import { AddTask } from './components/AddTask';
import { Header } from './components/Header';
import { ShowTask } from './components/ShowTask';
import { useState } from "react"


function App() {
  const [tasklist, setTasklist] = useState([]);
  const [task, setTask] = useState({})

  return (
    <>
      <Header />
      <AddTask tasklist={tasklist} setTasklist={setTasklist} task = {task} setTask={setTask}/>
      <ShowTask tasklist={tasklist} setTasklist={setTasklist} task = {task} setTask={setTask}/>
    </>
  );
}

export default App;
