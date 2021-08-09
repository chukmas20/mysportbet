import { Link } from "react-router-dom";
import "./Topbar.css";
import {useContext} from "react";
import { Context } from "../context/Context";

export default function Topbar() {
    const {user, dispatch} = useContext(Context);
    const PF = "http://localhost:5000/images/";
    const handleLogout =(e)=>{
      dispatch({type: "LOGOUT"});
    }
    return (
        <div className="topbar">
            <h5 className="topleft">
                <i className=" topIcon fab fa-twitter"> </i> 
                <i className=" topIcon fab fa-facebook"></i>
                <i className=" topIcon fab fa-linkedin-in"></i>
                <i className=" topIcon fab fa-instagram"></i>
            </h5>
            <h5 className="topcenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to="/" style={{textDecoration:'none', color:'inherit'}}>Home</Link>
                    </li>
                    <li className="topListItem">
                       <Link to="/" style={{textDecoration:'none', color:'inherit'}}>About</Link>
                    </li>
                    <li className="topListItem">
                       <Link to="/contact" style={{textDecoration:'none', color:'inherit'}}>Contact</Link>
                    </li>
                    <li className="topListItem">
                    <Link to="/write" style={{textDecoration:'none', color:'inherit'}}>Write</Link>
                    </li>
                    <li className="topListItem" onClick={handleLogout}>
                        {user && "Logout"}
                    </li>
                </ul>
            </h5>
            <div className="topright">
                 {
                     user ? (
                         <Link to="/settings" style={{textDecoration:'none', color:'inherit'}}>
                        <img src={PF+user.profilePic}
                         className="topImg"
                          alt="image"
                         />
                         </Link>
                     ):(
                        <ul className="topList">
                            <li className="topListItem">
                                 <Link style={{textDecoration:'none', color:'inherit'}} to="/login"> Login</Link>
                            </li>
                            <li>
                                <Link style={{textDecoration:'none', color:'inherit'}} to="/register"> Register</Link>
                            </li>
                        </ul>
                     )
                 }
                
                <i className="topSearchIcon  fas fa-search"></i>
            </div>      
        </div>
    )
}
