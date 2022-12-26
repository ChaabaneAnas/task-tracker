import {AiTwotoneDelete} from 'react-icons/ai'

const Task = ({task, onDoubleClick, onDelete}) => {
  return (
    <div 
    className= {`task ${task.reminder ? 'reminder' : ''}`}
    onDoubleClick ={() => onDoubleClick(task.id)} >
      <h3>   {task.title}
       <AiTwotoneDelete  onClick={() => onDelete(task.id)} style={{color: 'red'}} />
      </h3>
      <span> {task.date}</span>
    </div>
  )
}



export default Task
