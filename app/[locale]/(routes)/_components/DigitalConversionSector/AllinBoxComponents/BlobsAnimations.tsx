"use client"
import { initBlobs } from "../../libs/blobs";
import "./AllinBox.css"

import { useEffect } from "react";

const BlobsAnimations = () => {
    useEffect(() => {
        initBlobs(); // initBlobs fonksiyonunu bileşen yüklendiğinde çağırır
      }, []);
  
  return (
    <div className="bouncing-blobs-container absolute top-0" >
    <div  className="bouncing-blobs-glass" ></div>
    <div  className="bouncing-blobs">
     
      <div className="bouncing-blob bouncing-blob--pink"></div>
      <div className="bouncing-blob bouncing-blob--white"></div>
      <div className="bouncing-blob bouncing-blob--purple"></div>
      <div className="bouncing-blob bouncing-blob--blue"></div>
      <div className="bouncing-blob bouncing-blob--purple"></div>
      <div className="bouncing-blob bouncing-blob--pink"></div>
      <div className="bouncing-blob bouncing-blob--white"></div>
      <div className="bouncing-blob bouncing-blob--blue"></div>
      <div className="bouncing-blob bouncing-blob--white"></div>
      <div className="bouncing-blob bouncing-blob--pink"></div>
   
    </div>
    
  </div>
  )
}

export default BlobsAnimations