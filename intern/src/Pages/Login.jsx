import React ,{useState}from 'react';
import {Link,useNavigate} from 'react-router-dom'
import './Login.css'

function Login(){
    
    const [data,setData] = useState({
            email:"",
            password:""
        })
        const navigate= useNavigate()

        function handleChange(e){
        setData({
            ...data,
            [e.target.name]:e.target.value,
        })
    }
    const handleLogin = () => {
        let adminemail ='admin@gmail.com'
        let adminpassword = 'admin@123'
        if(!data.email || !data.password){
            alert("All filelds are required")
            return
    }
    if(data.email===adminemail && data.password===adminpassword){
        localStorage.setItem('auth','true')
        localStorage.setItem('currentuser','admin')
        alert('Admin login succesfull')
        navigate('/admin')
        return
    }
    let users = JSON.parse(localStorage.getItem('customer'))|| []
const validateuser= users.find(item => item.email===data.email && item.password===data.password)

if(validateuser){
    localStorage.setItem('auth','true')
    localStorage.setItem('currentuser',JSON.stringify(validateuser))
    alert('Login succesfull')
    navigate('/')
    } 
    else {
    alert('invalid email or password')
}
    }
 
    return(
        <div className='container'>
        <div className='form-box'>
            <h1>Login</h1>
                <input type='email' name='email' placeholder='Enter your email' onChange={handleChange} />
                <br/><br/>
                <input type='password' name='password' placeholder='Enter your password' onChange={handleChange} />
                <br/><br/>
                <button onClick={handleLogin}>Login</button>
                <br/>
                <p>Don't have an account? <Link to="/Register">Register </Link> </p>
                <br/>
                <Link to="/"> Go to Home</Link>
            </div>
            </div>
    
    )
} 
export default Login