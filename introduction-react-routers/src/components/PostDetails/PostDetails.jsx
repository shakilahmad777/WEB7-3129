import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const goBack = useNavigate();

    const handleGoBack = () => {
        goBack(-1)
    }

    const {id, title, body} = post;
    return (
        <div>
            <h2>Show Details {id}</h2>
            <p>
                {title}
                    </p>
            <small>
                {body}
            </small><br/>
            <button onClick={handleGoBack}>GO Back</button>
        </div>
    );
};

export default PostDetails;