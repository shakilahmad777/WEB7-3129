import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const postsResponce = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)'
}
const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h2>Posts {posts.length}</h2>
            <div style={postsResponce}>
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;