import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <p>This is the Home Component</p>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;