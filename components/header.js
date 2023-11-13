import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/svg/lenka-design-logo.svg"
            width="180"
            alt="Logo Lenka Design"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="/vizualizace">Vizualizace</Nav.Link>
            <Nav.Link href="/realizace">Realizace</Nav.Link>
            <NavDropdown title="Naše služby" id="basic-nav-dropdown">
              <NavDropdown.Item href="/nase-sluzby">
                Seznam služeb
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/bytovy-interier">
                Bytový interiér
              </NavDropdown.Item>
              <NavDropdown.Item href="/komercni-interier">
                Komerční interiér
              </NavDropdown.Item>
              <NavDropdown.Item href="/homestaging">
                Homestaging
              </NavDropdown.Item>
              <NavDropdown.Item href="/web-grafika">
                Web a grafika
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/exkluzivni-nabidky">Exkluzivní nabídky</Nav.Link>
            <Nav.Link href="/reference">Reference</Nav.Link>
            <Nav.Link href="/cenik">Ceník</Nav.Link>
            <Nav.Link href="/kontakt">
              <button type="button" className="btn btn-outline-primary ">
                Kontakt
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
