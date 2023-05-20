import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Footer(props) {
  return (
    // <footer className="footer py-4" style={{color:props.mode === 'dark'?'white':'green'}}>
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-md-4">
    //         <h3>Contact Us</h3>
    //         <ul className="contact-info">
    //           <li><i className="fa fa-map-marker"></i>Chacki Shahwani Saryab Road, Quetta</li>
    //           <li><i className="fa fa-phone"></i>+92 555-555-5555</li>
    //           <li><i className="fa fa-envelope"></i>jameelbakers@gmail.com</li>
    //         </ul>
    //       </div>
    //       <div className="col-md-4">
    //         <h3>About Us</h3>
    //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet justo vel risus varius, in interdum mi facilisis. Quisque at ligula eu urna rhoncus pulvinar.</p>
    //       </div>
    //       <div className="col-md-4">
    //         <h3>Follow Us</h3>
    //         <ul className="social-links">
    //           <li><a href="www.google.com" target="_blank"><i className="www.google.com"></i>facebook</a></li>
    //           <li><Link to="#"><i className="fa fa-twitter"></i>Instagram</Link></li>
    //           <li><Link to="#"><i className="fa fa-instagram"></i>Youtube</Link></li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-start">Copyright &copy; Your Website 2023</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" href="#facebook" aria-label="Twitter"><FontAwesomeIcon icon={faWhatsapp}/></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><FontAwesomeIcon icon={faTwitter}/></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><FontAwesomeIcon icon={faInstagram}/></a>
                    </div>
                    <div className="col-lg-4 text-lg-end">
                        <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                        <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
  );
}

export default Footer;
