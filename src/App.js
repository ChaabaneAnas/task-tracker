import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import Header from "./components/Header";
import Tasks from './components/Tasks'
import AddTask from "./components/AddTask";

const state = [
  {
  id: 1,
  title: 'doctor apointement',
  date: 'feb 5th at 2:00pm',
  reminder: true
},
{
  id: 2,
  title: 'school meeting',
  date: 'feb 7th at 8:00am',
  reminder: true
},
{
  id: 3,
  title: 'groceries shopping',
  date: 'feb 7th at 7:00pm',
  reminder: false
},

]

function App() {
  const [tasks, setTasks] = useState(state)
  const [toggleAdd, setToggle] = useState(false)
  const  title = 'Props Task tracker';

  // toggle
  const onDoubleClick = (id) => {
    setTasks(
      tasks.map(task => task.id === id  ?
        {...task, reminder: !task.reminder} : task )
    )
  }

  // delete
  const onDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  //submit

  const handleSubmit = (newTask) => {
  
    setTasks(
      [...tasks, {id: uuidv4(),...newTask}]
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
