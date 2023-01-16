import React from "react";
import PDFViewer from './PDFViewer'
import Resume from "./resume.pdf";

export default function Patents() {
	  return (
	    <div className="patents" style={{marginTop:'30px'}}>
	      <h4>Resume</h4>
	      <PDFViewer fileUrl={Resume} />
	    </div>
	  );
}