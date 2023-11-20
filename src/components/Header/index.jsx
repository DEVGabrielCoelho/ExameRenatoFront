import { Container, Nav, Navbar, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { StyledNavbar } from "./styled";
import "./styled.css";

function Header() {
  return (
    <>
      <StyledNavbar bg="dark" data-bs-theme="dark">
        <Container className="brand-custom">
          <Col>
            <Navbar.Brand style={{ fontSize: "40px" }}>
              <NavLink className="navlink-no-effect" to="/">
                Pizzaria Coelho
              </NavLink>
            </Navbar.Brand>
          </Col>
          <Nav className="me-auto">
            <Nav.Link style={{ fontSize: "20px" }}>
              <NavLink className="navlink-no-effect" to="/clientes">
                Clientes
              </NavLink>
            </Nav.Link>
            <Nav.Link style={{ fontSize: "20px" }}>
              <NavLink className="navlink-no-effect" to="/pedidos">
                Pedidos
              </NavLink>
            </Nav.Link>
          </Nav>
        </Container>
      </StyledNavbar>
    </>
  );
}

export default Header;
