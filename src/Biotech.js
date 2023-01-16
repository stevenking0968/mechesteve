import React from "react";
import "./styles.css";
import YoutubeEmbed from "./YoutubeEmbed";
import CellBox from "./cellbox.jpeg";
import CellGrowth from "./cellgrowth.png"
import Microscope from "./microscope.jpeg"

export default function Biotech() {
	  return (
	    <div className="biotech" style={{marginTop:'30px', maxWidth:'70%'}}>
	      <h4>Cell Growth Monitoring Container</h4>
	      <div style={{marginBottom:'60px'}}>
		      <p>I developed the stacked cell growth monitor container shown below based on requirements from Corning. These containers include 5 miniature electronic microscopes.
		      It can monitor the cell growth process in the nutrition solution by taking pictures every 4 hours and sending the pictures to a server through WiFi.</p>
		      <div style={{justifyContent:'center', display:'flex', justifyContent:'space-around'}}>
		      	<img src={CellBox} style={{width:'300px'}}/>
		      	<img src={CellGrowth} style={{width:'300px'}}/>
		      </div>
		      <p style={{marginTop:'50px'}}>I also significantly improved the resolution of the microscope used for the cell growth monitoring shown below, which was accomplished through modifications to the 
		      objective mechanical structure.</p>
		      <div style={{justifyContent:'center', display:'flex', justifyContent:'space-around'}}>
		      	<img src={Microscope} style={{width:'300px'}}/>
		      </div>
	      </div>
	    </div>
	  );
}