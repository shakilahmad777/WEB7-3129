import bannerImg from "../../assets/banner.png"
import "../../App.css"

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                src={bannerImg}
                className="max-w-sm rounded-lg"
                />
                <div className="lg:w-3xl">
                    <h1 className="md:text-6xl lg:text-7xl py-13 line-h font-serif leading-24 ">Books to freshen up your bookshelf</h1>
                    {/* <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p> */}
                    <button className="btn bg-green-500 rounded-xl text-white py-8 px-9 text-xl">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;