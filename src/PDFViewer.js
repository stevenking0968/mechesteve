import React from "react";

// Core viewer
import { Viewer, Worker } from '@react-pdf-viewer/core';
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import packageJson from '../package.json';

const pdfjsVersion = packageJson.dependencies['pdfjs-dist'];

export default function PDFViewer(props) {
	// Create new plugin instance
	let fileUrl = props.fileUrl;
	const defaultLayoutPluginInstance = defaultLayoutPlugin();
	  return (
	    <div className="resume" style={{minWidth:'1200px'}}>
	      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`}>
	      <Viewer
			fileUrl={fileUrl}
			plugins={[
			    // Register plugins
			    defaultLayoutPluginInstance,
			]}
			/>
			</Worker>
	    </div>
	  );
}