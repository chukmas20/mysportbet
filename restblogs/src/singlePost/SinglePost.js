import "./singlePost.css"
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Context } from "../context/Context";
import {useContext} from "react";


export default function SinglePost(){
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    //console.log(location);
    const [post, setPost] = useState({});
    const {user} =  useContext(Context);
    const PF = "http://localhost:5000/images/";
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);



    useEffect(()=>{
      const getPost = async ()=> {
       const res =   await axios.get("/posts/" + path);
       setPost(res.data);
       setTitle(res.data.title);
       setDesc(res.data.desc);
      // console.log(res);
      };
      getPost();
    }, [path]);
    
    const handleDelete = async (e)=>{
      try{
        await axios.delete(`/posts/${post._id}`, {
            data:{username: user.username},
        })
        window.location.replace("/")
      }catch(err){

      }
    }
    const handleUpdate = async (e)=>{
        try{
            await axios.put(`/posts/${post._id}`, 
              {
                    username: user.username,
                    title,
                    desc
              },
            )
           // window.location.reload();
           setUpdateMode(false);
          }catch(err){
    
          }
    }
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && (
                   <img 
                   src={PF + post.photo}
                   alt="image"
                   className="singlePostImg"
                />
                )}
                {
                    updateMode ? (
                        <input type="text" value={title} className="singlePostTitleInput" autoFocus onChange={(e)=>setTitle(e.target.value)}/>
                    ):(
                        <h1 className="singlePostTitle">
                    {title}
                    {post.username === user?.username && (      
                      <div className="singlePostEdit">
                      <i className="singlePostIcon fas fa-edit" onClick={()=>setUpdateMode(true)}></i>
                      <i className=" singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                      </div>
                    )
                    }             
                </h1>

                    )
                }
                
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author : 
                        <Link to={`/?user= ${post.username}`} style={{textDecoration:"none", color:"inherited"}}>
                           <b>{post.username}</b>
                        </Link>
                    </span>
                    <span className="singlePostDate">
                        {new Date(post.createdAt).toDateString()}
                    </span>
                </div>
                {
                    updateMode ? (
                       <textarea className="singlePostDescriptionInput" value={desc} onChange={(e)=>setDesc(e.target.value)} />
                    ):(
                        <p className="singlePostDescription">
                        {desc}
                    </p>
                    )
                }
                {
                    updateMode && ( <button className="singlePostButton" onClick={handleUpdate}>Update</button>
                    )
                }
                
            </div>
        </div>
    )
}
