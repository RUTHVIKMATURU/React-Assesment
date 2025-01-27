import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
function Register() {
  
  const { register, handleSubmit,formState:{errors} } = useForm();
  const navigate=useNavigate();
  let [err,seterr]=useState(null)
  function handleFormSubmit(newUser){
    fetch('http://localhost:3000/users',{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(newUser)
      
    }).then(res=>{
      if(res.status===201){
          navigate('/login')
      }
      else{
        seterr({message:res.message})
      }
      console.log('res:',res)
    })
    .catch(err=>{
      seterr(err)
    })
  }
  return (


    <div className='mt-5' >
      {
        err!=null&& <p className='lead text-danger text-center fs-1'>Failed to fetch</p>
      }
      <h1 className='text-warning text-center'>REGISTER</h1>
      <form action="" className='form-control' onSubmit={handleSubmit(handleFormSubmit)} style={{width:'300px',margin:'auto',display:'flex',flexDirection:'column',gap:'4px'}}>
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
        <label htmlFor="email" className='form-label'>email:</label>
        <input type="text" placeholder='email' className='form-control' id='email'
          {...register('email',{
              required:true,
              pattern:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            })}
        />
        {errors.email?.type==='required'&&<p className='text-danger'>*Email is required</p>}
        {errors.email?.type==='pattern'&&<p className='text-danger'>*Email is invalid</p>}
        <label htmlFor="DOB" className='form-label'>Date of Birth:</label>
        <input type="date" name="DOB" id="DOB" className='form-control'
        {...register('DOB',{
          required:true,
        })}
        />
        {errors.DOB?.type==='required'&&<p className='text-danger'>*Date of Birth is required</p>}
        <button type='submit' className="btn btn-success">Submit</button>
        
      </form>
    </div>
  )
}

export default Register