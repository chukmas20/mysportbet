import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import React, { useRef, useContext, useState } from 'react'
import "./login.css";
import axios from "axios";

export default function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching} = useContext(Context)
    const [error, setError] = useState(false);
    const handleSubmit = async(e)=>{
        e.preventDefault();
        dispatch({type : "LOGIN_START"})
        try{
          const res = await axios.post("/auth/login", {
              username:userRef.current.value,
              password:passwordRef.current.value,

          })
          dispatch({type : "LOGIN_SUCCESS", payload: res.data})
        }catch(err){
            dispatch({type : "LOGIN_FAILURE"})
            setError(true);
        }

    }
   // console.log(user);
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text"
                 className="loginInput"
                  placeholder="UserName"
                  ref={userRef}
                  />
                   <label>Password</label>
                <input type="password"
                   className="loginInput"
                   placeholder="password"
                   ref={passwordRef}
                   />  
                <button type="submit"  className="loginButton" disabled={isFetching}>Login</button>
            </form>
            {error && <span style={{color:"red", fontSize:"20px",margin:"20px"}}>Login Failed... Pls check credentials</span>}   

            <button className="loginRegisterButton">
               <Link style={{textDecoration:'none', color:'inherit'}} to="/register"> Register</Link>
            </button>
        </div>
    )
}

