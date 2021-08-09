import "./sidebar.css";
import {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar(){
    const [cats, setCats] = useState([]);

    useEffect(()=>{
      const getCats = async ()=>{
      const res = await axios.get("/categories");
          setCats(res.data);      
      }
     getCats();
    },[])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle"> About me</span>
                <img
                  src="https://images.unsplash.com/photo-1586196877083-6a4e8a995cf1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlvbmVsJTIwbWVzc2l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"   alt=""
                />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle"> Categories</span>
                <ul className="sidebarList">
                    {cats.map(c=>(
                        <Link to={`/cat=${c.name}`} style={{textDecoration:"none", color:"inherited"}}>
                        <li  className="sidebarListItem"> {c.name} </li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle"> Follow us</span>
               <div className="sidebarSocial">
                <i className=" sidebarIcon fab fa-twitter"> </i> 
                <i className=" sidebarIcon fab fa-facebook"></i>
                <i className=" sidebarIcon fab fa-linkedin-in"></i>
                <i className=" sidebarIcon fab fa-instagram"></i>
            </div>
            </div>
        </div>
    )
}
