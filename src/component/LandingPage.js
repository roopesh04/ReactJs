import React from "react";
import "./LandingPage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

function Landing(props){

    return(
        <div className="landing">
            <div className="centered" style={{justifyContent:"center",width:"100%",position:"relative",top:"30%"}}><p className="text "style={{textAlign:"center",color:"white",fontSize:"250%",fontWeight:"650"}}>Hello i am Arvapalli Roopesh. </p></div>
        </div>
    )
}

export default Landing;