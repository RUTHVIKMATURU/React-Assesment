import AddTask from './AddTask'
import TasksList from './TasksList'
import TaskCount from './TaskCount'
import { useState } from 'react'

function ManageTasks() {
  const [tasks, setTasks] = useState([]) 
  console.log(tasks)
  return (
    <div>
      <h1 className="text-warning text-center my-5">Manage Tasks</h1>
      <div className="d-flex justify-content-around">
        <AddTask tasks={tasks} setTasks={setTasks} />
        <TasksList tasks={tasks} />
        <TaskCount tasks={tasks} />
      </div>
    </div>
  )
}

export default ManageTasks
