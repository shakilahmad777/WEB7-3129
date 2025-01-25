import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <h2>Ooops!</h2>
            <h2>{error.status || error.statusText}</h2>

            {
                    error.status === 404 && <div>
                        <h3>Page not found</h3>
                        <p>Go back where your from</p>
                        <Link to="/"><button>Home</button></Link>
                    </div>
            }
        </div>
    );
};

export default ErrorPage;