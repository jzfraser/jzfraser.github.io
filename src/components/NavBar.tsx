import { Nav } from "react-bootstrap";

export function NavBar() {
  return (
    <Nav className="nav">
      <Nav.Link className="navlink" href="#home">
        Home
      </Nav.Link>
      <Nav.Link className="navlink" href="#about">
        About
      </Nav.Link>
      <Nav.Link className="navlink" href="#home">
        <h1 className="initials">jf</h1>
      </Nav.Link>
      <Nav.Link className="navlink" href="#skills">
        Skills
      </Nav.Link>
      <Nav.Link className="navlink" href="#projects">
        Projects
      </Nav.Link>
    </Nav>
  );
}
