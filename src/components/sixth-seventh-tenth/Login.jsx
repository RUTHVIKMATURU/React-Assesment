import { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { logincontextobj } from '../../contexts/LoginContext';
function Login() {
    const { register, handleSubmit,formState:{errors} } = useForm();
    const navigate=useNavigate();
    const {loginstatus,loginerror,onuserlogin,onuserlogout}=useContext(logincontextobj);

    useEffect(()=>{
      if(loginstatus){
        navigate('/userprofile')
      }
    },[loginstatus])
  return (
    <div>
      {
        loginerror!=null&& <p className='lead text-danger fs-1 text-center'>Failed to login</p>
      }
      <form action="" className='form-control' onSubmit={handleSubmit(onuserlogin)} style={{width:'300px',margin:'100px auto',display:'flex',flexDirection:'column',gap:'10px'}}>
      <label htmlFor="username" className='form-label'>Username:</label>
        <input type="text" placeholder='username'className='form-control' id='username' 
          {...register('username',{
            required:true,
            minLength:4
          })}
        />
        {errors.username?.type==='required'&&<p className='text-danger'>*Username is required</p>}
        {errors.username?.type==='minLength'&&<p className='text-danger'>*Username should be atleast 4 characters</p>}
        <label htmlFor="password" className='form-label'>Password:</label>
        <input type="password" placeholder='password' className='form-control' id='password'
          {...register('password',{
            required:true,
            minLength:6
          })}
        />
        {errors.password?.type==='required'&&<p className='text-danger'>*Password is required</p>}
        {errors.password?.type==='minLength'&&<p className='text-danger'>*Password should be atleast 6 characters</p>}
        
        <button type='submit' className="btn btn-success">Login</button>
      </form>
    </div>
  )
}

export default Login