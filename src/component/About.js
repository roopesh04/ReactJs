import React from 'react';
import { Link } from "react-scroll";
import profile from "../Assets/profile.jpeg";
import "./About.css"

function About(props){

    return(
        // <div className="AboutPage">
        //     <table >
        //         <tr>
        //             <br /><br /><br /><br /><br /><br /><br /><br /><br />
        //             <th><Link activeClass="" to="landing" spy={true} smooth={true}duration={500}> <img activeClass="logo" src={profile} style={{width:"100px"}} alt="Profile pic"/> </Link></th>
        //             <th><h1>Hello</h1></th>
        //         </tr>
        //     </table>
            
        // </div>
        <div>
          <section id="root">
              <table>
                  <tr>
                      <th><img className="profile-pic" src={profile} alt="Profile Image" /></th>
                      <th><h1>About Me</h1></th>
                  </tr>
              </table>
              </section>  
        </div>
    )
}

export default About;