import "./post.css"
import {Link} from "react-router-dom";

export default function PostDetail({post}) {
    const PF = "http://localhost:5000/images/";
    return (
        <div className="post">
            {post.photo && (
            <img 
            className="postImg"
               src={PF + post.photo}
               alt="image"
         />
            )}
            <div className="postInfo">
               <div className="postCats">
                   {post.categories.map((c)=>(
                     <span className="postCats"> {c.name}</span>
                   ))}
               </div>
               <Link to={`/post/${post._id}`} style={{textDecoration:"none", color:"inherit"}}>
               <span className="postTitle" >
                   {post.title}
               </span>
               </Link>
               <hr/>
               <span className="postDate">
                   {new Date(post.createdAt).toDateString()}
               </span>
            </div>
            <p className="postDescription" >
                {post.desc}
            </p>
        </div>
    )
}
