import React from "react"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './slider.css'


  const ImageGlider = () => {
    const slideImages = [
      {
        url: 'img/uvod/uvod1.jpg',
      },
      {
        url: 'img/uvod/uvod2.jpg',
      },
      {
        url: 'img/uvod/uvod3.jpg',
      },
      {
        url: 'img/uvod/uvod4.jpg',
      },
      {
        url: 'img/uvod/uvod5.jpg',
      },
    ];

  
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Lenka Design</h1>
        <h2>Design na míru dle vašeho přání</h2>
      </div>
      <div className="slide-container">
      <Slide autoplay={true} duration={4000}>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
     
        
    
      </section>
  )
}

export default ImageGlider