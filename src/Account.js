import React from 'react'
import "./css/Account.css";
import profile from "./assests/profile.webp";
const Account = (props) => {
  const user=props.data;
  console.log(user);
  return (
     <div className='wrapper'>


                   <div className='heading3'>
                           <h1 className='heading-1'>Account Settings</h1>
                   </div>
                   
                

                   <img src={profile} className='image'
                   />               
                   <p className='userName'>{user.name}</p>
                <p className='userEmail'>{user.email}</p>
                        
                  <p className='content3'>
                  Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                  </p>
            <p className='line'></p>
             </div>
 
   
    
  )
}

export default Account