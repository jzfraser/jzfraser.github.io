import "../styles/NavBar.scss";

import { Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function removeLeadingSlash(s: string): string {
  if (s[0] === "/") return s.slice(1);
  else return s;
}

type Link = {
  name: string;
  to: string;
  variant?: "initials";
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
    variant: "initials",
  },
  {
    name: "pets",
    to: "/pets",
  },
  {
    name: "projects",
    to: "/projects",
  },
];

export function NavBar() {
  const { pathname } = useLocation();
  const path = pathname === "/" ? "home" : removeLeadingSlash(pathname);

  return (
    <Navbar expand="sm" collapseOnSelect className="navbar">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="nav">
        <Nav className="nav">
          {links.map((link, index) => {
            const linkClassNames = `navlink ${link.variant ? link.variant : ""
              }`;
            return (
              <Nav.Link
                eventKey={index}
                key={index}
                className={linkClassNames}
                as={Link}
                to={link.to}
                active={link.name === "jf" ? false : link.name === path}
              >
                {link.variant ? (
                  <h1 className="gradient-text">{link.name}</h1>
                ) : (
                  link.name
                )}
              </Nav.Link>
            );
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
