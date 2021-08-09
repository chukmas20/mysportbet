import { Link } from "react-router-dom"
import {useState} from "react";
import axios from "axios";
import "./register.css"

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);


    const handleSubmit= async (e)=>{
       e.preventDefault();
       setError(false);
       try{
        const res = await axios.post("/auth/register", {
            username,
            email,
            password
        })
        res.data && window.location.replace("/login")
       }catch(err){
        setError(true);
   }
}
       

    return (
        <div className="register">
              <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label>Username</label>
                 <input type="text"
                    className="registerInput"
                    placeholder="Username" 
                    onChange={(e)=>setUsername(e.target.value)}
                  />
                <label>Email</label>
                 <input type="email"
                    className="registerInput"
                    placeholder="Email" 
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                   <label>Password</label>
                <input type="password" 
                   className="registerInput"
                    placeholder="password"
                    onChange={(e)=>setPassword(e.target.value)}
                  />  
                <button className="registerButton">Register</button>   
            </form>
            <button type="submit" className="registerLoginButton">
                <Link style={{textDecoration:'none', color:'inherit'}} to="/login">
                     Login
                </Link>
            </button>
            { error && <span style={{color:"red", margin:"20px"}}> Something went wrong</span>}
        </div>
    )
}
