import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const Login = () => {
  const [userName,setUserName]=useState('')
  const [userPassword,setUserPassword]=useState('')

  const [userNamev,setUserNamev]=useState()
  const [userPasswordv,setUserPasswordv]=useState()
  const [formError,setformError]=useState()

  const navigate = useNavigate();
  const loginFormSubmit=(e)=>{
     e.preventDefault();
    
     // form validation

     if (userName.length ===0 && userPassword.length === 0) {
      setUserNamev(true)
      setUserPasswordv(true)
      setformError(true)
     
      
    }
    if (userName.length > 0 && userPassword.length === 0) {
      setUserNamev(false)
      setUserPasswordv(true)
      setformError(true)
      
    }
    if (userName.length === 0 && userPassword.length > 0) {
      setUserNamev(true)
      setUserPasswordv(false)
      setformError(true)
      
    }

    if(userName.length > 0 && userPassword.length > 0){
     setformError(false)
     setUserNamev(false)
     setUserPasswordv(false)
    }


  if(!formError){
   
     console.log(userName)
     console.log(userPassword)
     if(userName ==="mars" && userPassword==="password"){
      const items={username:"mars",password:"password"}
      localStorage.setItem('loginInfo', JSON.stringify(items));
         navigate('/projects')
     }
  }
  
     
  }

  return (
    <div>
      <form className='loginForm'>
       <div className='error'>
        </div> 
      <div className='formInput'>
      <label className='error'>{ userNamev && 'Enter Your Name'}</label>
      <input type='text' className={ userNamev ? 'loginText errorfocus':'loginText' } value={userName} placeholder='Enter Name' onChange={(e)=>setUserName(e.target.value)}></input>
      </div>
      <div className='formInput'>
      <label className='error'>{ userPasswordv && 'Enter Your Password'}</label>
      <input type='password' className={ userPasswordv ? 'loginPass errorfocus':'loginPass' } value={userPassword} placeholder='Enter Password' onChange={(e)=>setUserPassword(e.target.value)}></input>
      </div>
      <div className='formInput'>
      <label className='error'></label>
      <button type='submit' className='loginBtn' onClick={loginFormSubmit}>Submit</button>
      </div>
      </form>
      
    </div>
  )
}

export default Login