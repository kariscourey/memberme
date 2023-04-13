import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MemberMeNav() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">MemberMe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Inventory">
              <NavDropdown.Item href="/automobiles">Automobiles</NavDropdown.Item>
              <NavDropdown.Item href="/automobiles/new">Create automobile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/models">Models</NavDropdown.Item>
              <NavDropdown.Item href="/models/new">Create model</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/manufacturers">Manufacturers</NavDropdown.Item>
              <NavDropdown.Item href="/manufacturers/new">Create manufacturer</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Sales">
              <NavDropdown.Item href="/sales">See all sales</NavDropdown.Item>
              <NavDropdown.Item href="/sales/new">Create sale</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Services">
              <NavDropdown.Item href="/services">See all services</NavDropdown.Item>
              <NavDropdown.Item href="/services/history">See service history</NavDropdown.Item>
              <NavDropdown.Item href="/services/new">Create service</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Employees">
              <NavDropdown.Item href="/employees">See all employees</NavDropdown.Item>
              <NavDropdown.Item href="/employees/new">Create employee</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Customers">
              <NavDropdown.Item href="/customers">See all customers</NavDropdown.Item>
              <NavDropdown.Item href="/customers/new">Create customer</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MemberMeNav;
