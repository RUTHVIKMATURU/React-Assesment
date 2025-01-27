import React from 'react'

function Child({counter,setcounter}) {
  function handleIncrement() {
    setcounter(counter + 1)
  }
  function handleDecrement(){
    setcounter(counter - 1)
  }
  return (
    <div>
      <button className="btn btn-primary m-5" onClick={handleIncrement}>Increment</button>
      <button className="btn btn-warning m-5" onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Child