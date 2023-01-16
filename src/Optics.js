import React from "react";
import "./styles.css";
import YoutubeEmbed from "./YoutubeEmbed";
import PCBCone from "./pcbcone.png";
import Objective from "./objective.png";
import OpticalMount from "./opticalmount.png"
import Laser from "./laser.png"
import GoPro from "./gopro.png"

export default function Optics() {
	  return (
	    <div className="molex" style={{marginTop:'30px', maxWidth:'70%'}}>
	      <h4>Camera/Optics</h4>
	      <div style={{marginBottom:'60px'}}>
	      <p>At GoPro, I developed a new compensation structure which signficantly alleviated an issue where the camera would defocus due to heat. My new design reduced the defocus from 25 um to only 12 um.</p>
	      <div style={{display:'flex', justifyContent:'space-around'}}>
		    <img src={GoPro} style={{width:'400px'}}/>
	      </div>
	      <p style={{paddingTop:'50px'}}>I modified an objective mechanical structure and make it meet the design specs and put it into production.</p>
	      	<div style={{display:'flex', justifyContent:'space-around'}}>
	      		<img src={Objective} style={{width:'400px'}}/>
      		</div>
	      <p style={{paddingTop:'50px'}}>I designed a compact YAG laser that is only 12" x 4" x 7" through modifying the optical mounts, pump cavity and optical path. This became part of a much more compact ultra fast laser, which was shrunk down from 6' x 3' x 1' to only 30" x 20" x 10" in dimension.</p>
	      	<div style={{display:'flex', justifyContent:'space-around'}}>
	      		<img src={Laser} style={{width:'500px'}}/>
	      	</div>
	      <p style={{paddingTop:'50px'}}>I invented a compact optical mount pictured below, which is now patented.</p>
	      	<div style={{display:'flex', justifyContent:'space-around'}}>
	      		<img src={OpticalMount} style={{width:'300px'}}/>
	      	</div>
	      </div>
	    </div>
	  );
}