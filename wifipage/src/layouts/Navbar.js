import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import logo from '../../src/resources/MORALES.png'
const NavBar = () => {
    return(
       <> 
       <div className="barraN">
       <Navbar className="navBg" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/" ><img class="logonav" src={logo} alt={logo}></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/" >Inicio</Nav.Link>
                <Nav.Link as={Link} to="/about">Quienes somos</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contactos</Nav.Link>        
            </Nav>
            <a href="http://clientes.portalinternet.io/saldo/wifistrakprueba/" target="_blank" rel="noopener noreferrer">
                <button class="bttn-unite bttn-md bttn-danger">Tu Factura</button>
            </a>
            </Navbar.Collapse>
        </Container>
        </Navbar>  
        </div>
        <section>
            <Outlet></Outlet>
        </section> 
        <a href="https://wtsi.me/573133811341" class="btn-wsp" target="_blank" rel="noopener noreferrer">
	    <i class="fa fa-whatsapp icono"></i>
	    </a>
       </> 
    )
}
export default NavBar