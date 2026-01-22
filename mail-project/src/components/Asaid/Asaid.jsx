import React, { use } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Asaid.css'
import { ChevronLeft, ChevronRight } from "lucide-react";

const asaidLinkPromise = fetch("productLink.json").then((res) => res.json());

export default function Asaid() {
    const asaidLinks = use(asaidLinkPromise);
    const navigate = useNavigate();
    const handleNavigateBack = () => {
        navigate(-1)
    }
    const handleNavigateNext = () => {
        navigate(+1)
    }
    return (
        <div className="text-start">
            <ul>
                {asaidLinks.map((link) => (
                    <li>
                        <Link key={link.id} to={link.path}>
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="">
                <button className="back p-3.5 rounded font-bold fixed top-96"
                    onClick={handleNavigateBack}><ChevronLeft></ChevronLeft>
                </button>
                <button className="ahead p-3.5 rounded font-bold fixed top-80 left-40"
                    onClick={handleNavigateNext}><ChevronRight></ChevronRight>
                </button>
            </div>
        </div>
    );
}
