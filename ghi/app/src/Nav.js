import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CarCarNav() {
  return (
<<<<<<< HEAD
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sales">Sales</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sales/new">Create sale</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/customers/new">Create customer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sales_people/new">Create sales person</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/automobiles">Automobiles</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/automobiles/new">Create automobile</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/models">Models</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/models/new">Create model</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/manufacturers">Manufacturers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/manufacturers/new">Create manufacturer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services/new">create a Service</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/technicians/new">Create technician</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services/history">Service History</NavLink>
            </li>
            <Outlet />
          </ul>
        </div>
      </div>
    </nav>
=======
    <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand href="/">CarCar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Sales" id="sales-nav-dropdown">
              <NavDropdown.Item href="/sales">See all sales</NavDropdown.Item>
              <NavDropdown.Item href="/sales/new">Create sale</NavDropdown.Item>
              <NavDropdown.Item href="/customers/new">Create customer</NavDropdown.Item>
              <NavDropdown.Item href="/sales_people/new">Create sales person</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Services" id="sales-nav-dropdown">
              <NavDropdown.Item href="/services">See all services</NavDropdown.Item>
              <NavDropdown.Item href="/services/new">Create service</NavDropdown.Item>
              <NavDropdown.Item href="/technicians/new">Create technician</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Inventory" id="automobiles-nav-dropdown">
              <NavDropdown.Item href="/automobiles">Automobiles</NavDropdown.Item>
              <NavDropdown.Item href="/automobiles/new">Create automobile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/models">Models</NavDropdown.Item>
              <NavDropdown.Item href="/models/new">Create model</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/manufacturers">Manufacturers</NavDropdown.Item>
              <NavDropdown.Item href="/manufacturers/new">Create manufacturer</NavDropdown.Item>
            </NavDropdown>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
>>>>>>> main
  )
}

export default CarCarNav;
