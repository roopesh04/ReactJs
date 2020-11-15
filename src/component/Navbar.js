import React from 'react';
import {Nav,Navbar} from 'react-bootstrap';
import profile from "../Assets/profile.jpeg";
import Landingpage from "./LandingPage";
import { Link } from "react-scroll";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css'; 
import './Navbar.css'
import About from "./About";
 
function NavbarLand(props){

    return(
        <div>
            <h1>I am dirty fellow rfr </h1>
            <Navbar collapseOnSelect expand="lg" fixed="top"   style={{backgroundColor: "#1a1819"}} className="navbarcol shadow-lg  navbar-light">
            <Navbar.Brand href="#home" style={{height:"100%"}}>
                <br /><br />
                {/* <Link activeClass="" to="landing" spy={true} smooth={true}duration={500}> <img activeClass="logo" src={profile} style={{width:"100px"}} alt="Profile pic"/> </Link> */}
                </Navbar.Brand> 
                <Navbar.Toggle aria-controls="responsive-navbar-nav " />
                <Navbar.Collapse className="col-md-pull-3  navbar-light" id="responsive-navbar-nav"style={{justifyContent:"center",position:"relative",right:"3%"}}>
                <Nav.Link className="mr-1 text "  style={{color:"#F4F4F4",fontSize:"19px",fontWeight:"700"}}><Link activeClass="active1" to="landing" spy={true} smooth={true}duration={500}> HOME</Link></Nav.Link>
                <Nav.Link className="mr-1 text "  style={{color:"#F4F4F4",fontSize:"19px",fontWeight:"700"}}><Link activeClass="active2" to="about" spy={true} smooth={true}duration={500} > ABOUT</Link></Nav.Link>
                <Nav.Link className="mr-1 text "  style={{color:"#F4F4F4",fontSize:"19px",fontWeight:"700"}}><Link activeClass="active3" to="teams" spy={true} smooth={true}duration={500} > RESUME</Link></Nav.Link>
                <Nav.Link className="mr-1 text "  style={{color:"#F4F4F4",fontSize:"19px",fontWeight:"700"}}><Link activeClass="active4" to="conquests" spy={true} smooth={true}duration={500}> WORKS</Link></Nav.Link>
                <Nav.Link className="mr-1 text "  style={{color:"#F4F4F4",fontSize:"19px",fontWeight:"700"}}><Link activeClass="active4" to="conquests" spy={true} smooth={true}duration={500}> CONTACT</Link></Nav.Link>
                    </Navbar.Collapse>
            </Navbar>

            <div id="landing" ><Landingpage /></div>
            <div id="about" ><About /></div>
        </div>
    )
}

export default NavbarLand;