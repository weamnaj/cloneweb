import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./headerMain.css";
import { useNavigate } from "react-router-dom";

const HeaderMain = () => {
  const navigate = useNavigate();
  return (
    <section className="headerMain">
      <Navbar bg="light" expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-center w-100">
              <Nav.Link href="#english">english</Nav.Link>
              <Nav.Link
                onClick={() => navigate("/location")}
                href="#search-location"
              >
                البحث عن محلاتنا
              </Nav.Link>
              <Nav.Link onClick={() => navigate("/login")} href="#login">
                تسجيل دخول
              </Nav.Link>
              <Nav.Link onClick={() => navigate("/register")} href="#register">
                تسجيل مستخدم جديد
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default HeaderMain;
