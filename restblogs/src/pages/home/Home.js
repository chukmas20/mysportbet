import Header from "../../header/Header";
import Post from "../../posts/Post";
import Sidebar from "../../sidebar/Sidebar";
import {useEffect, useState} from "react";
import "./Home.css";
import {useLocation} from "react-router-dom";
import axios from "axios";
import Contact from "../Contact/Contact";

export default function Home() {
    const [posts, setPosts] = useState([])
    const {search} = useLocation();

    useEffect(() => {
       const fetchPosts = async ()=>{
          const res = await axios.get("/posts");
          setPosts(res.data);
          //console.log(res);
       }
       fetchPosts();
    },[search]);
    return (
        <>
           <Header />  
           <div className="home">
              <Post posts={posts} />
              <Sidebar />
         </div>
     </>
    )
}
