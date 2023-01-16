import React from "react";
import PDFViewer from './PDFViewer'
import LinkedIn from './linkedin.png'
import Presentation from './presentation.pdf'
export default function Slides() {

  return (
    <div className="slides">
	  <div style={{marginTop:'30px'}}>
      <h4>Slides</h4>
      <p>I am a mechanical engineer with 25+ years of experience. Check out my background and projects below.</p>
      <PDFViewer fileUrl={Presentation} />
      </div>
    </div>
  );
}
