import React from 'react'

function TaskCount({tasks}) {
  return (
    <div>
      <h1>{tasks.length}</h1>
    </div>
  )
}

export default TaskCount