import React from "react";
import "./styles.css";
import YoutubeEmbed from "./YoutubeEmbed";
import PCBCone from "./pcbcone.png";
import Tosa from "./tosa.png";
import TosaAssembly from "./tosaassembly.png"

export default function Telecom() {
	  return (
	    <div className="telecom" style={{marginTop:'30px', maxWidth:'70%'}}>
	      <h4>Telecommunications</h4>
	      <div style={{marginBottom:'60px'}}>
		      <p>I developed a 4 channel 100G transceiver. The 4 channel laser and fiber array pitch is 750 um.</p>
		      <div style={{justifyContent:'center', display:'flex', justifyContent:'space-around'}}>
		      	<img src={Tosa} style={{width:'500px', marginBottom:'50px'}}/>
		      </div>
		      <p>I also developed the machine used to manufacture this transceiver. It is an automatic alignment machine which adjusting the silicon lens to align the laser beam into fiber. This machine is fully automated and has entered production.</p>
		      <div style={{justifyContent:'center', display:'flex', justifyContent:'space-around'}}>
		      	<img src={TosaAssembly} style={{width:'700px'}}/>
		      </div>
	      </div>
	    </div>
	  );
}