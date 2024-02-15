import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import './css/login.css';
const Login = ({submit}) => {
       const {register,handleSubmit}=useForm();
       const navigate=useNavigate();
       const onSubmitHandler=(data)=>{
        if(submit)
        {
           submit(data);
        }
        navigate('/account');

      }

  return (
    <div className='wrapper'>
    <h1 className='heading2'>
      Signin to your PopX account
    </h1>
    <p className='content2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
            <label htmlFor='name' className='label1'>Name </label>
              <input {...register('name')} required type='text' placeholder='Enter Your Name' className='nameInput' />
           
            <label htmlFor='email' className='label2'>Email </label>
              <input {...register('email')} required type='email' placeholder='Enter Your Email Address' className='emailInput'/>
            
            <label htmlFor='pass' className='label3'>Password </label>
              <input {...register('pass')} required type='password' placeholder='Enter Password' className='passinput'/>
           
            <button type='submit' className='login-button'>Login</button>
        </form>


    </div>
  )
}

export default Login