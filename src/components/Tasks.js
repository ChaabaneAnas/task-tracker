import propTypes from "prop-types"
import Task from './Task'

const Tasks = ({tasks, onDoubleClick, onDelete}) => {
  return (
    <>
     {tasks.map(task => (
      <Task key={task.id} task={task} onDoubleClick={onDoubleClick} onDelete={onDelete} />
     ))}
    </>
  )
}

Task.propTypes = {
  task: propTypes.object,
  onDoubleClick: propTypes.func,
  onDelete: propTypes.func
}

export default Tasks
