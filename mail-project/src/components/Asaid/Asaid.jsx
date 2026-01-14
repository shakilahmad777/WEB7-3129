import React, { use } from "react";
import { Link } from "react-router-dom";

const asaidLinkPromise = fetch("productLink.json").then((res) => res.json());

export default function Asaid() {
  const asaidLinks = use(asaidLinkPromise);
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
    </div>
  );
}
