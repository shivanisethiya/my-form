
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Signup from './Signup';
import Account from './Account';
import Login from './Login';
import { useState } from 'react';

function App() {
 
  const [userData, setUserData] = useState(null);

  const onSubmitHandler = (data) => {
    setUserData(data);
  };
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Signup' element={<Signup onSubmit={onSubmitHandler}/>}/>
    <Route path='/login' element={<Login submit={onSubmitHandler}/>}/>
    <Route path='/account' element={<Account data={userData}/>}/>
   </Routes>
  );
}

export default App;
