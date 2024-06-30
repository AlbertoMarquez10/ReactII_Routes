import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = ({ Agenda, Home, Cake}) => {
  return (
    <>
      <Navbar bg="danger" data-bs-theme="dark" className='d-flex flex-row bd-highlight justify-content-between'>
        <Container>
          <Nav className="me-auto">
          <Nav.Link><Link to='/' className='text-white text-decoration-none'><img src={Home} className='mx-1 colorIcon'/>Home</Link></Nav.Link>
            <Nav.Link><Link to='/contacto' className='text-white text-decoration-none'><img src={Agenda} className='mx-1 colorIcon'/>Contacto</Link></Nav.Link>
          </Nav>
          <Navbar.Brand><Link to='/' className='text-white text-decoration-none'>Happy Cake<img src={Cake} className='mx-1 colorIcon'/></Link></Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
