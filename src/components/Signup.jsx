import React, { useState } from 'react';
import authservice from '../firebase/auth';
import service from '../firebase/config';

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSignup = async () => {
  //   try {
  //     await authservice.createAccount({ auth: authservice.auth, email, password });
  //   } catch (error) {
  //     console.log("FIREBASE SIGNUP ERROR", error);
  //   }
  // };
  const handleSignup = () => {
    authservice.createAccount({ auth: authservice.auth, email, password });
  };

  const handleLogin = ()=>
  {
    authservice.Login({auth:authservice.auth,email,password});
  }
  
  

  const getdata = ()=>{
    service.getd();
  }

  return (
    <>
    <div className='Signup'>
    <label htmlFor="Email">Email</label>
      <input type="email" name="email" id="" onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor="Password">Password</label>
      <input type="password" name="password" id="" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Signup</button>
    </div>
    <br />
    <br />
    <div className='Login'>
    <input type="email" name="email" id="" onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor="Password">Password</label>
      <input type="password" name="password" id="" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>

    <h1>Put data testing</h1>
    
    <button onClick={getdata}>gettt
    </button>
      
    </>
  );
}

export default Signup;
