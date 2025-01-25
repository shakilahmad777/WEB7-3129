import { Link, useNavigate } from "react-router-dom";

const postStyle = {
    border: '2px solid yellow',
        padding: '10px',
        margin: '20px 10px',
        borderRadius: '20px'
}

const Post = ({post}) => {
    const {id, title, body} = post;
    const navigate = useNavigate();

    const handleShowDetails = () => {
        navigate(`/post/${id}`)
    }

    return (
        <div style={postStyle}>
            <h3>Title: {title}</h3>
            <p>{body}</p>
            <Link to={`/post/${id}`}><button>Show Details</button></Link><br/>
            <Link to={`/post/${id}`}><button>Post Details</button></Link><br/>
            <button onClick={handleShowDetails}>Click Here..</button>
        </div>
    );
};

export default Post;