import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './css/signUp.css';
const Signup = ({onSubmit}) => {

const { register, handleSubmit } = useForm();
const navigate = useNavigate();

const onSubmitHandler = (data) => {
  if (onSubmit) {
    onSubmit(data);
  }
  navigate('/account');
};

  return (
    <div className='wrapper'>
        <h1 className='heading1'>Create your PopX account</h1>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
            <label htmlFor='name' className='nameLabel' >Full Name <span className='asteric'>*</span>  </label>
                <input {...register('name')} 
                type='text' name='name' required id='name' className='inputtype1'/>
          
            <label htmlFor='phone' className='phoneLabel'>Phone number <span className='asteric'>*</span></label>
                <input {...register('phone')} required type='text' name='phone' id='phone' className='input2'/>
            
            <label htmlFor='email' className='emailLabel'>Email address <span className='asteric'>*</span></label>
                <input {...register('email')} required type='email' name='email' id='email' className='input3'/>
            
            <label htmlFor='pass' className='passLabel'>Password <span className='asteric'>*</span></label>
                <input {...register('pass')} required type='password' name='pass' id='pass' className='input4'/>
            
            <label htmlFor='com' className='comLabel'>Company name <span className='asteric'>*</span>  </label>
                <input {...register('com')} required type='text' name='com' id='com' className='input5'/>
          

            <p className='radioLabel'>Are you an Agency ? <span className='asteric'>*</span></p>
           
           
            <input type='radio' name='agen' value='Yes' required className='radio1'/><span className='radio-text1'>Yes</span>

           
            
            <input type='radio' name='agen' value='No' className='radio2'/><span className='radio-text2'>No</span>
    
           

            <button type='submit' className='submit'>Create Account</button>
        </form>
        
    </div>
  )
}

export default Signup