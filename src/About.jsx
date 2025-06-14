import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'; // Import Navbar and Nav from react-bootstrap
import { CiMenuBurger } from 'react-icons/ci'; // Import the menu icon
import './App.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import img from "./about.jpg";
import Container from "react-bootstrap/Container";
import { FaTwitter } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { useEffect } from "react";
import CountUp from 'react-countup';
import AOS from "aos";
import bg from './bg_3.jpg';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

import {Routes,Route,Link} from 'react-router-dom';
import Services from './Services'
import Cars from './Cars'
import Blog from './Blog.jsx'
import Contact from './Contact.jsx'
import Pricing from './Pricing.jsx'
import Home from './Home.jsx';
const About = () => {

   useEffect(() => {
    AOS.init({
      // Customize the animation duration
    });
  }, []);

  return (
    <main>
      <div className="home-section" style={{
      background: `linear-gradient(to top, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.3) 50%), url(${bg})`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'top', 
    height: '600px' 
    }}>

        {/* Navbar Start */}
        <div className="nav-bar">
          <div className="navbar-center">
            <Navbar expand="lg">
              <Navbar.Brand className="logo" href="#home">
                <h1>CAR<span>BOOK</span></h1>
              </Navbar.Brand>
              <Navbar.Toggle className="menu" aria-controls="basic-navbar-nav">
                <h3 className="toggle-menu"><CiMenuBurger /></h3>
              </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav id="links" className="me-auto">
                 <Nav.Link className="nav-item active"  as={Link} to='/home'>
                      Home
                    </Nav.Link>
                    <Nav.Link as={Link} to ="/about">About</Nav.Link>
                    <Nav.Link as={Link} to='/services'>Services</Nav.Link>
                    <Nav.Link as={Link} to='/pricing'>Pricing</Nav.Link>
                    <Nav.Link as={Link} to='/cars'>Cars</Nav.Link>
                    <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                    <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>

 <Routes>
             <Route path="/home" element={<Home/>}></Route>  
             <Route path="/about" element={<About/>}></Route>      
             <Route path="/services" element={<Services/>}></Route>  
             <Route path="/pricing" element={<Pricing/>}></Route>   
             <Route path="/cars" element={<Cars/>}></Route>  
             <Route path="/blog" element={<Blog/>}></Route>  
             <Route path="/contact" element={<Contact/>}></Route>  
         </Routes>

<div  data-aos="fade-up"
              data-aos-duration="1000"  className='about-contents ' >
     <p >HOME <span style={{fontSize:'20px'}}><MdKeyboardArrowRight /></span> ABOUT US <span style={{fontSize:'20px'}}><MdKeyboardArrowRight /></span> </p>
                <h1>About Us</h1>
</div>

      </div>
  
              {/* about page */}

      
      <Container fluid className="about" style={{marginTop:'0px'}}>
        <Row id='dk'>
          
          <Col id="about-1" className="col-lg-4 col-md-4 col-sm-12">
            <Image style={{ width: "550px" }} src={img} />
          </Col>

          <Col id="about-2" style={{marginTop:'0px'}} className="col-lg-8 col-md-12 col-sm-12">
          
            <div data-aos="fade-up"  data-aos-duration="1000" className="about-content">
              <h3  >ABOUT US</h3>
              <h1  >Welcome to Carbook</h1>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>

              <p>
                On her way she met a copy. The copy warned the Little Blind
                Text, that where it came from it would have been rewritten a
                thousand times and everything that was left from its origin
                would be the word "and" and the Little Blind Text should turn
                around and return to its own, safe country. A small river named
                Duden flows by their place and supplies it with the necessary
                regelialia. It is a paradisematic country, in which roasted
                parts of sentences fly into your mouth.
              </p>

              <button className="Search-btn">Search Vehicle</button>
            </div>
          </Col>
        </Row>
      </Container>

    {/* become a driver */}

      <div className="become-driver" style={{marginTop : '0px'}}>
        <Col id="driver-1" className="col-4 "></Col>

        <Col id="driver-2" className="col-8">
          <div className="driver-content">
            <Container>
              <div data-aos="fade-up"  data-aos-duration="1000">
                <h1>Do You Want To Earn With</h1>
                <h1 className="mt-3">Us? So Don't Be Late.</h1>
                <button className="mt-3">Become A Driver</button>
              </div>
            </Container>
          </div>
        </Col>
      </div>
     


  <div className="numbers-section" style={{position:'relative',top: '0px',marginTop:'400px'}} >
        <Col data-aos="fade-up"  data-aos-duration="800" className="number-1 col-lg-3 col-md-12 col-sm-12 col-12">
          <h1><CountUp end={60} duration={2.5} separator="," /></h1>
          <h2>
            Year <br></br> Experienced
          </h2>
        </Col>
        <Col data-aos="fade-up"   data-aos-duration="1000" id="numbers-1" className="number-2 col-lg-3 col-md-12 col-sm-12 col-12">
          <h1><CountUp end={1090} duration={2.5} separator="," /></h1>
          <h2>
            Total<br></br>Cars
          </h2>
        </Col>
        <Col
          id="numbers-2"
          className="number-2 col-lg-3 col-md-12 col-sm-12 col-12"
          data-aos="fade-up"  data-aos-duration="1200"
        >
          <h1> <CountUp end={2590} duration={2.5} separator="," /></h1>
          <h2>
            Happy<br></br>Customers
          </h2>
        </Col>
        <Col 
          id="numbers-3"
          className="number-2 col-lg-3 col-md-12 col-sm-12 col-12"
          data-aos="fade-up"  data-aos-duration="1400"
        >
          <h1><CountUp end={67} duration={2.5} separator="," /></h1>
          <h2>
            Total<br></br>Branches
          </h2>
        </Col>
      </div>

  {/* footer*/}

      <div className="footer" style={{position:'relative'}}>
        
        <div className="footer-center">
          <div className="footer-head">
            <div className="footer-heading-1">
              <h1>CAR</h1>
              <span>BOOK</span>
            </div>
            <p className="footer-para">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>

            <div className="footer-social-media">
              <h1 data-aos="fade-up"  data-aos-duration="800">
                <FaTwitter />
              </h1>
              <h1 data-aos="fade-up"  data-aos-duration="1000">
                <GrFacebookOption />
              </h1>
              <h1 data-aos="fade-up"  data-aos-duration="1200">
                <BsInstagram />
              </h1>
            </div>
          </div>

          <div className="footer-ifno">
            <h1>Information</h1>

            <p>About</p>
            <p>Services</p>
            <p>Term and Conditions</p>
            <p>Best Price Guarantee</p>
            <p>Privacy & Cookies Policy</p>
          </div>

          <div className="footer-customer">
            <h1>Customer Support</h1>
            <p>FAQ</p>
            <p>Payment Option</p>
            <p>Booking Tips</p>
            <p>How it works</p>
            <p>Contact Us</p>
          </div>

          <div className="footer-question">
            <h1>Have a Questions?</h1>
            <div id="footer-icons" className="d-flex">
              <h2>
                <MdLocationOn />
              </h2>
              <p className="footer-para">
                Rajam Theatre, Komarapalayam
              </p>
            </div>
            <div id="footer-icons" className="d-flex">
              <h2>
                <FaPhone />
              </h2>
              <p> +91 8838394299</p>
            </div>

            <div id="footer-icons" className="d-flex">
              <h2>
                <IoMdMail />
              </h2>
              <p>kesavan@gmail.com</p>
            </div>
          </div>
        </div>
      </div>


    </main>
  );
};

export default About;
