import "../styles/NavBar.scss";

import { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function removeLeadingSlash(s: string): string {
  if (s[0] === "/") return s.slice(1);
  else return s;
}

type Link = {
  name: string;
  to: string;
  variant?: "lg-gradient";
};

const links: Link[] = [
  {
    name: "home",
    to: "/home",
  },
  {
    name: "about",
    to: "/about",
  },
  {
    name: "jf",
    to: "/home",
    variant: "lg-gradient",
  },
  {
    name: "skills",
    to: "/skills",
  },
  {
    name: "projects",
    to: "/projects",
  },
];

export function NavBar() {
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useState(
    pathname === "/" ? "home" : removeLeadingSlash(pathname)
  );

  console.log(isActive);

  return (
    <Nav className="nav">
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            className={`navlink ${isActive === link.name ? "active" : ""}`}
            to={link.to}
            onClick={() => setIsActive(removeLeadingSlash(link.to))}
          >
            {link.variant ? (
              <h1 className="gradient-text">{link.name}</h1>
            ) : (
              link.name
            )}
          </Link>
        );
      })}
    </Nav>
  );
}
