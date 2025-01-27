import React, { useState,useEffect} from 'react';
import { set } from 'react-hook-form';
function Array() {
  const [arr, setArr] = useState([1, 2, 3, 4]);
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  function handleAddelement() {
      setArr([...arr, inputValue]);
  }
  function handleDeleteAtIndex(){
    arr.splice(inputValue2,1)
    setArr([...arr]);
  }
  return (
    <div className='container display-3'>
      {arr.map((item, index) => (
        <h1 key={index} className='fs-2' >{item}</h1>
      ))}
      <input className="form-control border border-dark w-25 rounded-3 text-center fs-2" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button className="bg-primary rounded-3 text-light px-4 py-2 fs-2 border m-3" onClick={handleAddelement}>Add</button>
      <input type="text" className="form-control w-25 border border-dark rounded-3 text-center fs-2" value={inputValue2} onChange={(e)=>setInputValue2(e.target.value)}/>
      <button className="bg-danger rounded-3 text-light py-2 px-4  m-3 fs-2 border" onClick={handleDeleteAtIndex}>Delete</button>
    </div>
  );
}

export default Array;
