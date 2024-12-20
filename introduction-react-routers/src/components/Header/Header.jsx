import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <span>My Websit</span>
                <span>
                    <Link to="/">Home</Link>
                    <Link to="/posts">Posts</Link>
                    <Link to="/users">Users</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </span>
            </nav>
        </div>
    );
    
};

export default Header;