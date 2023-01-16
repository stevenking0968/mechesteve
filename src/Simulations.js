import React from "react";
import "./styles.css";
import YoutubeEmbed from "./YoutubeEmbed";
import Displacement from "./displacement.png";
import Deformation from "./deformation.png"
import Flatness from "./flatnessanalysis.png"
import ModeFlow from "./modeflowanalysis.png"
import Thermal from "./thermalanalysis.png"

export default function Simulations() {
	  return (
	    <div className="simulations" style={{marginTop:'30px', maxWidth:'70%'}}>
	      <h4>My Simulation Expertise</h4>
	      <div style={{marginBottom:'60px'}}>
		      <p>I have extensive experience with a variety of simulations. These include Thermal Analysis, Static Analysis, Injection Mold Flow Analysis, Dynamic and Vibration Analysis, etc.
		      Some examples from my past projects are shown below.</p>
		      <div style={{margin: '60px 0', display:'flex', justifyContent:'space-around', textAlign:'center'}}>
		      	<div>
			      	<img src={Thermal} style={{width:'500px', marginRight: '30px'}}/>
			      	<label>Thermal Analysis</label>
		      	</div>
		      	<div>
		      		<img src={ModeFlow} style={{width:'500px'}}/>
		      		<label>Injection Mold Flow Analysis</label>
		      	</div>
		      </div>
		      <div style={{marginBottom: '60px', display:'flex', justifyContent:'space-around'}}>
		      	<div>
			      <img src={Flatness} style={{width:'500px', marginRight: '30px'}}/>
			      <label>Flatness Analysis</label>
			    </div>
			    <div>
			      <img src={Deformation} style={{width:'500px'}}/>
			      <label>Deformation Analysis</label>
			    </div>
		      </div>
		      <div>
		      <div style={{marginBottom: '60px', display:'flex', justifyContent:'space-around'}}>
		      	<div>
					<img src={Displacement} style={{width:'500px'}}/>
					<div>
						<label>Displacement Analysis</label>
					</div>
				</div>
			  </div>
		      </div>
	      </div>
	    </div>
	  );
}