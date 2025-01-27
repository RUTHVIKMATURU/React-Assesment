import React from 'react';
import { useForm } from 'react-hook-form';
import './Form.css';

function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  console.log("form errors", errors);

  function handleformSubmit(data) {
    console.log(data);
  }

  return (
    <div className='main'>
      <form onSubmit={handleSubmit(handleformSubmit)}>
        <h3 className='py-2'>Registration form</h3>

        <div className="upperhalf">
          <div className="left">
            <label htmlFor="firstname" className="form-label">Firstname:</label>
            <input 
              type="text" 
              id="firstname"
              {...register('firstname', { required: "First name is required", minLength: { value: 4, message: "First name should be at least 4 characters" }, maxLength: { value: 6, message: "First name should be at most 6 characters" } })} 
              className="form-control" 
            />
            {errors.firstname && <p className='text-danger'>{errors.firstname.message}</p>}

            <label htmlFor="bod" className="form-label">Birthday:</label>
            <input 
              type="date" 
              id="bod" 
              {...register('birthday', { required: "Birthday is required" })} 
              className='form-control' 
            />
            {errors.birthday && <p className='text-danger'>{errors.birthday.message}</p>}

            <label htmlFor="email" className="form-label">Email:</label>
            <input 
              type="email" 
              id="email" 
              {...register('email', { required: "Email is required" })} 
              className="form-control" 
            />
            {errors.email && <p className='text-danger'>{errors.email.message}</p>}
          </div>

          <div className="right">
            <label htmlFor="lastname" className="form-label">Lastname:</label>
            <input 
              type="text" 
              id="lastname" 
              {...register('lastname', { required: "Last name is required", minLength: { value: 4, message: "Last name should be at least 4 characters" }, maxLength: { value: 6, message: "Last name should be at most 6 characters" } })} 
              className="form-control" 
            />
            {errors.lastname && <p className='text-danger'>{errors.lastname.message}</p>}

            <label className="form-label">Gender:</label>
            <div>
              <input 
                type="radio" 
                id="male" 
                {...register('gender', { required: "Gender is required" })} 
                value="male" 
              />
              <label htmlFor="male">Male</label>

              <input 
                type="radio" 
                id="female" 
                {...register('gender', { required: "Gender is required" })} 
                value="female" 
              />
              <label htmlFor="female">Female</label>
            </div>
            {errors.gender && <p className='text-danger'>{errors.gender.message}</p>}

            <label htmlFor="phone" className="form-label">Phone Number:</label>
            <input 
              type="tel" 
              id="phone" 
              {...register('phone', { required: "Phone number is required", pattern: { value: /^\d{10}$/, message: "Please enter a valid 10-digit phone number." } })} 
              className="form-control" 
            />
            {errors.phone && <p className='text-danger'>{errors.phone.message}</p>}
          </div>
        </div>

        <div className="subject">
          <label htmlFor="subject">Subject:</label>
          <select id="subject" {...register('subject', { required: "Subject is required" })}>
            <option value="" disabled defaultValue>Choose Option</option>
            <option value="DAA">DAA</option>
            <option value="OOPS">OOPS</option>
            <option value="MFCS">MFCS</option>
            <option value="DBMS">DBMS</option>
          </select>
          {errors.subject && <p className='text-danger'>{errors.subject.message}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
