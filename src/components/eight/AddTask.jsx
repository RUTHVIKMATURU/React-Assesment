import React from 'react'
import { useForm } from 'react-hook-form'

function AddTask({ tasks, setTasks }) {
  const { register, handleSubmit } = useForm()

  function addTask({ taskName }) {
    const temp = [...tasks]
    temp.push(taskName)
    setTasks(temp)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(addTask)}>
        <input
          type="text"
          placeholder="Enter task name"
          {...register("taskName")}
          className="form-control my-2"
        />
        <button type="submit" className="btn btn-success">
          Add Task
        </button>
      </form>
    </div>
  )
}

export default AddTask
