import React,{useEffect,useState} from 'react'
import chocolates from '../Components/chocolate.jpg'
import biscuit from '../Components/biscuits.jpg'
import dairy from '../Components/dairy.jpg'
import image1 from '../Homepage.jpg'
import image2 from '../Biscuits/10.jpg'
import image3 from '../Biscuits/11.jpg'
import Footer from './Footer'
import developer from '../developer.jpg'
import client1 from '../client 1.jpg'
import client2 from '../client 2.jpg'
import client3 from '../client 3.jpg'
import client4 from '../client 4.jpg'


import '../App.css';
export default function Home(props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1, image2, image3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);



  return (
    <div className='container' style={{color:props.mode === 'dark'?'white':'black'}}>
            <div className='text-center my-3 ' style={{backgroundColor:props.mode ==='dark'? 'grey':'white',color: props.mode ==='dark'? 'white':''}}>
        <h1 className='welcome'>Welcome to Jameel Baker's</h1>
      </div>
      <section className='top'>
      <div className="hero-section">
          {/* <img src={Homepage} alt="Your Image" className="img-fluid"/> */}
          <div className="blurry-image-container my-5">
        <img
          src={images[currentImageIndex]}
          alt="Blurred Background"
          className="blurry-image"
        />
      </div>
      

        </div>
      </section>

      
      <div className='centered-text'>
        <p >Track products you’ve liked.Save those you want to see.Tell your friends what’s good.  </p>

      </div>
     

      <div className="upperline my-3">
            <h1>We deal with Three Porducts</h1>
      </div>
      <div className="container my-5" style={{color:props.mode === 'dark'?'white':'black'}}>
              <h4 className='products my-5'>Select Your Product</h4>
            </div>
      <hr />
      

<div className='card-container d-flex flex-wrap justify-content-evenly my-5' style={{color:props.mode === 'dark'?'black':'green'}}>
            <div className="card mb-4" style={{width: "18rem"}}>
              <img src={chocolates} className="card-img-top" alt="..."/>
              <h3 className="card-title my-3 text-center">Choco chips</h3>
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div className="card mb-4" style={{width: "18rem"}}>
              <img src={dairy} className="card-img-top" alt="..."/>
              <h3 className="card-title my-3 text-center">Desi biscuit</h3>
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div className="card mb-4" style={{width: "18rem"}}>
              <img src={biscuit} className="card-img-top" alt="..."/>
              <h3 className="card-title my-3 text-center">Creamy Biscuits</h3>
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>


      <hr />
      <div className="latest_products my-5">
          <h1>Our latest Products</h1>
          <div className='card-container d-flex flex-wrap justify-content-evenly my-5' style={{color:props.mode === 'dark'?'black':'green'}}>
            <div className="card mb-4" style={{width: "18rem"}}>
              <img src={chocolates} className="card-img-top" alt="..."/>
              <h3 className="card-title my-3 text-center">Choco chips</h3>
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div className="card mb-4" style={{width: "18rem"}}>
              <img src={dairy} className="card-img-top" alt="..."/>
              <h3 className="card-title my-3 text-center">Desi biscuit</h3>
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div className="card mb-4" style={{width: "18rem"}}>
              <img src={biscuit} className="card-img-top" alt="..."/>
              <h3 className="card-title my-3 text-center">Creamy Biscuits</h3>
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div className="card mb-4" style={{width: "18rem"}}>
              <img src={dairy} className="card-img-top" alt="..."/>
              <h3 className="card-title my-3 text-center">Rakshani Biscuits</h3>
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div className="card mb-4" style={{width: "18rem"}}>
              <img src={biscuit} className="card-img-top" alt="..."/>
              <h3 className="card-title my-3 text-center">Quetta Biscuits</h3>
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
</div>
<hr />
        <section className="page-section" id="team"  >
            <div className="container" >
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={developer} alt="..." />
                            <h4>Jameel Ahmed 1</h4>
                            <p className="text-muted">Lead Designer</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!" ><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" ><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" ><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={developer} alt="..." />
                            <h4>Jameel Ahmed 2</h4>
                            <p className="text-muted">Lead Marketer</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!" ><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" ><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" ><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={developer} alt="..." />
                            <h4>Jameel Ahmed 3</h4>
                            <p className="text-muted">Lead Developer</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!" ><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" ><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" ><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section>

<hr />
<h2>Our Clients</h2>
{/* <!-- Clients--> */}
        <div className="py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src={client1} alt="..." aria-label="Microsoft Logo" /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src={client2} alt="..." aria-label="Google Logo" /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src={client3} alt="..." aria-label="Facebook Logo" /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src={client4} alt="..." aria-label="IBM Logo" /></a>
                    </div>
                </div>
            </div>
        </div>
<hr />

      <Footer mode={props.mode}/>
    
    </div>
  )
}
