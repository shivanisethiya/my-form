import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='wrapper'>
        <p className='heading'>Welcome to PopX</p>
        <p className='content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <Link to='/signUp' className='signUp'>
        <Link to='/Signup' className='signUp_1'>Create Account</Link>
        </Link>
        <Link to='login' className='login'>
        <Link to='/login' className='login_1'>Already Registered? Login</Link>
        </Link>
        
        

    </div>
  )
}

export default Home