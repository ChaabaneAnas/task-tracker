import { useState,useEffect } from "react";
import Header from "./components/Header";
import Tasks from './components/Tasks'
import AddTask from "./components/AddTask";


function App() {
  useEffect(() => {
    const getTasks = async () => {
      const tasks = await fetchTasks()
      setTasks(tasks)
    }
    getTasks()
  },[])
  const [tasks, setTasks] = useState([])
  const [toggleAdd, setToggle] = useState(false)
  const  title = 'Task tracker';

  //fetch tasks

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }


  // toggle
  const onDoubleClick = async (id) => {
    const toggledTask = {...tasks[id-1], reminder: !tasks[id-1].reminder}
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'},
      body: JSON.stringify(toggledTask)
    })
    setTasks(
      tasks.map((task) => task.id === id ? {...task, reminder:!task.reminder } : task)
    )
  }

  // delete
  const  onDelete = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,{
     method: "DELETE"
    })
    setTasks(tasks.filter(task => task.id !== id))
  }

  //submit

  const handleSubmit = async(newTask) => {
      const res = await fetch('http://localhost:5000/tasks',{
      method:'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newTask),
    })
    const data = await res.json()
    setTasks(
      [...tasks,data]
    )
  }

  //toggleAdd

  const handleAdd = () => {
    setToggle(
      !toggleAdd 
    )
  }

  
  return (
    <div className="container">
      <Header title = {title} handleAdd = { handleAdd } toggleAdd={ toggleAdd }/>
      {toggleAdd && <AddTask handleSubmit={handleSubmit} />}
      <Tasks tasks={tasks} onDoubleClick={onDoubleClick} onDelete={onDelete} />
    </div>
  );
}

export default App;
