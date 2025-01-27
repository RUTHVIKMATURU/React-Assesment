import React, { useEffect } from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { logincontextobj } from '../../contexts/LoginContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
function UserProfile() {
  const {register,handleSubmit,setValue}=useForm();
  const [isEdit,setisEdit]=useState(false);
  const {currentUser,setcurrentUser,setloginstatus}=useContext(logincontextobj);
  const navigate=useNavigate();
  function Edit(){
    setValue('username',currentUser.username);
    setValue('password',currentUser.password);
    setValue('email',currentUser.email);
    setValue('DOB',currentUser.DOB);
    setisEdit(true);
  }
  function onSave(modifieduser){
    
    setisEdit(false); 
    modifieduser.id=currentUser.id;
    fetch(`http://localhost:3000/users/${modifieduser.id}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(modifieduser)
    })
    .then(res=>res.json())
    .then(data=>{
      setcurrentUser(data);
    })
    .catch(err=>{
      console.log(err);
    })
    
  }
  useEffect(()=>{
    if(currentUser===null){
      navigate('/login');
      setloginstatus(false);
      
    }
  },[currentUser])
  function deleteuserbyID(){
    fetch(`http://localhost:3000/users/${currentUser.id}`,{
      method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
      setcurrentUser(null);
    })
    
    .catch(err=>{
      console.log(err);
    })
    
  }
  return (
      (isEdit===false)?<div className='container text-center mt-5'>
      <h1>Username : {currentUser?.username}</h1>
      <h4>Email : {currentUser?.email}</h4>
      <h4>Date of Birth : {currentUser?.DOB} </h4>
      <button className="btn btn-warning m-2" onClick={Edit}>Edit</button>
      <button className="btn btn-danger m-2" onClick={deleteuserbyID}>Delete</button>
    </div>: <form action="" onSubmit={handleSubmit(onSave)} className='form-control' style={{width:'300px',margin:'100px auto',display:'flex',flexDirection:'column',gap:'10px'}}>
      <input type="text" className='form-control' {...register('username',{
        required:true,
        minLength:4
      })}/>
      <input type="text" className='form-control' {...register('password',{
        required:true,
        minLength:6
      })}/>
      <input type="email" className='form-control' {...register('email',{
        required:true,
        pattern:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      })}/>
      <input type="date" className='form-control' {...register('DOB',{
        required:true,
      })}/>
      <button className="btn btn-success">Save</button>
    </form>
    
  )
}

export default UserProfile;