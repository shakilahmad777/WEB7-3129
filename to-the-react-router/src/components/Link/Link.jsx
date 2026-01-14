import { NavLink } from "react-router-dom";

export default function Link({link}) {
  const [id, name, path] = link;
  return (
    <div>
      <NavLink to="/link.path">{name}</NavLink>
    </div>
  );
}
