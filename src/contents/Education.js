 import React, { Component } from 'react'
 import Widecard from '../components/Widecard';

 class Education extends Component {
     render() {
         return(
             <div className="condiv">
                 <h1 className="subtopic">My Education</h1>
                 <Widecard title="Bachelor of Science Program in Mathematics with Computer Science" where="King Mongkut's University of Technology North Bangkok (KMUTNB)" from="2016" to="2020" />
                 <Widecard title="MilerDev" where="Miler High School" from="2011" to="2016" />
             </div>
         );
     }
 }
 
 export default Education;