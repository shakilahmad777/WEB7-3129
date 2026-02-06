
export default function NavBar() {
    const link = <>
        <li><a>Home</a></li>
        <li>
            <details>
                <summary>Listed Book</summary>
                <ul className="p-2 bg-base-100 w-40 z-1">
                    <li><a>Favorite</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </details>
        </li>
        <li><a>Page to Read</a></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm font-bold">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                link
                            }
                        </ul>
                    </div>
                    <a className="sm:text-2xl">Book Vibe</a>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            link
                        }
                    </ul>
                </div>
                <div className="sm:navbar-end flex">
                    <a className="btn mr-2 bg-[#23BE0A] text-white">Sign Up</a>
                    <a className="btn bg-[#59C6D2] text-white">Log In</a>
                </div>
            </div>
        </div>
    )
}
