import  { useState } from 'react'
import Child from './Child'

function Parent() {
  let [counter,setcounter]=useState(0)
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <Child counter={counter} setcounter={setcounter}/>
    </div>
  )
}

export default Parent