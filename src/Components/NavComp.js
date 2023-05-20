import React from 'react'
import { Link } from 'react-router-dom'
import { Nav,Navbar} from 'react-bootstrap';

export default function NavComp(props) {
  
  return (
    <div>

        

              <Navbar className = {`navbar    navbar-expand-lg  navbar-transparent navbar-${props.mode} bg-${props.mode} `}  expand="lg">
              <div className="container-fluid ">
                <Navbar.Brand ><Link className="navbar-brand  " to="/">Jameel Baker's</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto navbar-collapse justify-content-center">
                    <Nav.Link ><Link className="nav-link " aria-current="page" to="/">Home</Link></Nav.Link>
                    <Nav.Link ><Link className="nav-link" to="/chocolates">Chocolates</Link></Nav.Link>
                    <Nav.Link ><Link className="nav-link" to="/biscuits">Biscuits</Link></Nav.Link>
                    <Nav.Link href="#contact"><Link className="nav-link" to="/dairy_products">Dairy Products</Link></Nav.Link>
                  </Nav>
                </Navbar.Collapse>
                </div>
                <div className={`form-check form-switch text-${props.mode ==='light'? 'dark':'light'}`}>
                  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">DarkMode</label>
              </div>
              </Navbar>
    </div>
  )
}
