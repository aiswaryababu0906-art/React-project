import React, { useState } from 'react';
import{Link} from 'react-router-dom'
import './Login.css'

function Register() {
    const [user,setUser] = useState({
        email:"",
        password:""
    })
    const handleChange = (e)=>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    } 
    const handleSubmit = ()=>{
        if(!user.email || !user.password){
            alert("All filelds are required")
            return
        }

        //Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if(!emailPattern.test(user.email)) {
            alert("Enter valid email address")
            return
        }
        //password validation
        //minimum 6 chars,1 uppercase,1 lowercase,1 number
        const passwordPattern = 
             /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/

             if(!passwordPattern.test(user.password)){
                alert(
                    "password must contain minimum 6 characters,one uppercase,one lowercase and one Number"
                )
                return
             }
        let users = JSON.parse(localStorage.getItem('customer'))|| []

        const exist=users.find(item => item.email===user.email)
     if (exist){
        alert('user already exists')
        return
     }
     users.push(user)
            localStorage.setItem('customer',JSON.stringify(users))
            alert("Registration succefull") 
     }
     return(
        <div className='container'>
            <div className='form-box'>
 
        <h1>Register</h1>

                <input type='email' name='email' placeholder='Enter your email' onChange={handleChange} />
                <br/><br/>
                <input type='password' name='password' placeholder='Enter your password' onChange={handleChange} />
                <br/><br/>
                <button onClick={handleSubmit}>Register</button>
                <br/>
                <p>Already have an account? <Link to="/Login">Login </Link> </p>
                <br/>
                <Link to="/"> Go to Home</Link>
            </div>
 </div>
    )
}
export default Register