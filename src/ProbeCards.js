import React from "react";
import "./styles.css";
import YoutubeEmbed from "./YoutubeEmbed";
import PCBCone from "./pcbcone.png";
import Torsion from "./torsion.png";
import TorsionInternal from "./torsioninternal.png";

export default function ProbeCards() {
	  return (
	    <div className="probecards" style={{marginTop:'30px', maxWidth:'70%'}}>
	      <h4>Probe Card Head Lapping Machine</h4>
	      <div style={{marginBottom:'60px'}}>
	      <p>I have extensive experience working on probe card manufacturing. One notable project was when I designed and created a completely new probe card head lapping machine.</p>
	      <p>Grinding the probe card head end to the appropriate flatness is a critical step in the probe card manufacturing process. In this case, the flatness requirement of the probe head end is 10 micron and it is very thin and not very rigid. Correctly grinding the probe head end to the appropriate flatness requires very fine tuned control and constant monitoring of the grinding progress. 
	      There was no existing machine that could do this, so I invented an intelligent grinding machine that can precisely control the grinding force and monitor the grinding progress. The unique feature of this machine was that it was capable of intelligently sensing and constantly adjusting the grinding to achieve very fine results.</p>
    	  <div style={{display:'flex', justifyContent:'center'}}>
	    	  <div style={{width:'500px'}}>
	      		<YoutubeEmbed embedId="USpgon7ZrLg" />
	      	  </div>
      	  </div>
      	  <p style={{marginTop:'50px'}}>I have invented torsion and cantilevel mixed probe structure that is patented.</p>
      	  <div style={{display:'flex', justifyContent:'center'}}>
      		<img src={Torsion} style={{height:'250px', marginBottom:'50px', marginRight:'50px'}}/>
      	  </div>
	      <p>I also invented a push-pull bending mechanism to solve problem where the probe card LTCC Plate was being bent/deformed by the combined force of large number of pogo pins. This mechanism offset the force of the pogo pin and ensured the LTCC plate is able to maintain its flat shape and is now patented.</p>
	      <div style={{display:'flex', justifyContent:'center'}}>
	      	<img src={TorsionInternal} style={{height:'250px', marginBottom:'50px'}}/>
	      </div>
	      </div>
	    </div>
	  );
}