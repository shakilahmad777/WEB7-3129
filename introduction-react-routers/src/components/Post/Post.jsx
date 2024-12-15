
const postStyle = {
    border: '2px solid yellow',
        padding: '10px',
        margin: '20px 10px',
        borderRadius: '20px'
}

const Post = ({post}) => {
    const {id, title, body} = post;
    return (
        <div style={postStyle}>
            <h3>Title: {title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default Post;