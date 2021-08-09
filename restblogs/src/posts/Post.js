import PostDetail from "../post/PostDetail";
import "./posts.css";

export default function Post({posts}) {
    return (
        <div className="posts">
            {posts.map((p)=>(
                <PostDetail post={p} />
            ))}         
        </div>
    )
}
