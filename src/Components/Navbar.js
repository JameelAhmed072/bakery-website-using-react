// import React from 'react'
// import { Link } from 'react-router-dom'
// import { Nav,Navbar} from 'react-bootstrap';

// export default function Navbar(props) {
  
//   return (
//     <div>

//         {/* <nav className={`navbar   navbar-expand-lg navbar-transparent navbar-${props.mode} bg-${props.mode}`}>
//                   <div className="container-fluid ">
//                       <Link className="navbar-brand " to="/">Jameel Baker's</Link>
//                       <div className="collapse navbar-collapse justify-content-center" id="navbarCenteredExample">
//                       <ul className="navbar-nav  mx-auto">
//                           <li className="nav-item " >
//                           <Link className="nav-link " aria-current="page" to="/">Home</Link>
//                           </li>
//                           <li className="nav-item">
//                           <Link className="nav-link" to="/chocolates">Chocolates</Link>
//                           </li>
//                           <li className="nav-item">
//                           <Link className="nav-link" to="/biscuits">Biscuits</Link>
//                           </li>
//                           <li className="nav-item">
//                           <Link className="nav-link" to="/dairy_products">Dairy Products</Link>
//                           </li>
                          
//                       </ul>
                      
//                       </div>
//                   </div>
//                   <div className={`form-check form-switch text-${props.mode ==='light'? 'dark':'light'}`}>
//                   <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
//                   <label className="form-check-label" htmlFor="flexSwitchCheckDefault">DarkMode</label>
//               </div>
//             </nav> */}

//               <Navbar className = {`navbar   navbar-expand-lg navbar-transparent navbar-${props.mode} bg-${props.mode}`}  expand="lg">
//                 <Navbar.Brand ><Link className="navbar-brand " to="/">Jameel Baker's</Link></Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                   <Nav className="ml-auto">
//                     <Nav.Link ><Link className="nav-link " aria-current="page" to="/">Home</Link></Nav.Link>
//                     <Nav.Link ><Link className="nav-link" to="/chocolates">Chocolates</Link></Nav.Link>
//                     <Nav.Link ><Link className="nav-link" to="/biscuits">Biscuits</Link></Nav.Link>
//                     <Nav.Link href="#contact"><Link className="nav-link" to="/dairy_products">Dairy Products</Link></Nav.Link>
//                     {/* <Nav.Link href="#contact">Contact</Nav.Link>
//                     <Nav.Link href="#contact">Contact</Nav.Link> */}
//                   </Nav>
//                 </Navbar.Collapse>
//                 <div className={`form-check form-switch text-${props.mode ==='light'? 'dark':'light'}`}>
//                   <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
//                   <label className="form-check-label" htmlFor="flexSwitchCheckDefault">DarkMode</label>
//               </div>
//               </Navbar>
//     </div>
//   )
// }
