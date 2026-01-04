import React, { useState } from 'react'
import './css/LoginSignup.css'
import { BASE_URL } from '../api.js'



export const LoginSignup = () => {

  const [state, setState] = useState("Login");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

const login = async()=>{
  let responseData;
await fetch(`${BASE_URL}/login`,{
  method: "POST",
  headers: {
    Accept: "application/form-data",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formData),
}).then((response)=>response.json()).then((data)=>responseData=data)
if(responseData.success){
  localStorage.setItem("auth-token", responseData.token);
  window.location.replace("/");
}
else{
  alert(responseData.errors);
}

}

const signup = async()=>{
  console.log("signup called");
let responseData;
await fetch(`${BASE_URL}/signup`,{
  method: "POST",
  headers: {
    Accept: "application/form-data",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formData),
}).then((response)=>response.json()).then((data)=>responseData=data)
if(responseData.success){
  localStorage.setItem("auth-token", responseData.token);
  window.location.replace("/");
}
else{
  alert(responseData.errors);
}
}








  return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
          <h1>
            {state}
          </h1>
          <div className="loginsignup-field">
           {state==="Sign Up"? <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder='Your Name' /> : <></>}
            <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder='Email Address' />
            <input name="password" value={formData.password} onChange={handleChange} type="password" placeholder='Password' />

          </div>
          <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
          {state==="Sign Up"? <p className='loginsignup-login'>Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span></p> : <p className='loginsignup-login'>Create an account? <span onClick={()=>{setState("Sign Up")}}>Click here</span></p>}
          
          
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
          </div>
        </div>
    </div>
  )
}
