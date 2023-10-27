import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../Context/AuthContext';

function Login(props) {
  const {login, message , setMessage} = useContext(AuthContext);
  const [formData, setFormData ,]=useState(null); 
  
  useEffect(()=>{
    setMessage("");
  })
  const handleChange=(e)=>{
       const {name,value}=e.target;
       setFormData((prev)=>({
        ...prev,
        [name]:value
       }))
  }
  const submitForm=(e)=>{
    e.preventDefault();
   login(formData);
    
  }
  

  return (
        <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" name='password' className="form-control" id="exampleInputPassword1" onChange={handleChange}/>
        </div>
  
        <button type="submit" className="btn btn-primary" onClick={submitForm}>Login</button>
        <p className='fs-5'>{message}</p>
        <p>Forgot Username/Password?<br/><a href="">click here</a> to reset</p>
      </form>
      
    );
}

export default Login;