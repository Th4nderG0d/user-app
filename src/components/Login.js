import React,{useState} from 'react'
import {useHistory,Link} from 'react-router-dom'
import './Login.css'
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/UserReducer';

function Login() {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const history=useHistory();

    const dispatch = useDispatch();
    const submit = (e) => {
      e.preventDefault();
      dispatch(loginUser({ email, password }));
      console.log({  email, password });
      history.push("/profile")
    };
   
    
   
    return (
        <div id="login">
    
        <form className="loginForm" onSubmit={submit}>
            <input type="email" className="loginInpt" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email" required/><br/>
            <input type="password" className="loginInpt" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password"/><br/>
            <button type="submit" className="loginBtn">LOGIN</button>
            <div className="loginTxt">
                <span className="txt">Dont have an account?</span>
                <br/>
                <Link className="links" to='/register'><button className="loginBtn2" type="submit">Create account</button></Link>
            </div>
            </form>
        
        </div>
    )
}

export default Login;
