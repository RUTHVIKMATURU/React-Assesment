import React from 'react'

function TasksList({ tasks }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <h1>No tasks</h1>
      ) : (
        tasks.map((task,index) => (
          <h1 key={index}>{task}</h1>
        ))
      )}
    </div>
  )
}

export default TasksList
