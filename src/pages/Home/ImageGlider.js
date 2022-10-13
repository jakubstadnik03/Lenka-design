import React, { useEffect } from "react"
import Glide, { Controls, Breakpoints, Autoplay } from '@glidejs/glide/dist/glide.modular.esm'
import '@glidejs/glide/dist/css/glide.core.min.css'
import '@glidejs/glide/dist/css/glide.theme.min.css'
import './slider.css'


  const ImageGlider = () => {
    const slider = new Glide('.glide', {
      type: 'slider',
      autoplay: 4000,
    });
  useEffect(() => {
    return () => slider.mount({ Controls, Breakpoints, Autoplay })
  }, [slider])

  const GlideSlideImageStyles = {
    width: '100%',
    objectFit: 'cover'
  }
  
  const GlideArrowRightStyles = {
    right: '0'
  }

  
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Lenka Design</h1>
        <h2>Design na míru dle vašeho přání</h2>
      </div>
      {" "}
      <div className='glide'>
        <div className='glide__track' data-glide-el='track' >
          <ul className='glide__slides' >
            <li className='glide__slide slider'><img src="img/uvod/uvod1.jpg" style={GlideSlideImageStyles} alt="" /></li>
            <li className='glide__slide slider'><img src="img/uvod/uvod2.jpg" style={GlideSlideImageStyles} alt="" /></li>
            <li className='glide__slide slider'><img src="img/uvod/uvod3.jpg" style={GlideSlideImageStyles} alt="" /></li>
            <li className='glide__slide slider'><img src="img/uvod/uvod4.jpg" style={GlideSlideImageStyles} alt="" /></li>
            <li className='glide__slide slider'><img src="img/uvod/uvod5.jpg" style={GlideSlideImageStyles} alt="" /></li>
          </ul>
          <div className='glide__arrows' data-glide-el='controls'>
          <button className='glide__arrow glide__arrow--prev' data-glide-dir='<'><img src="svg/circle-left.svg" alt="" /></button>
          <button className='glide__arrow glide__arrow--next' data-glide-dir='>' style={GlideArrowRightStyles} ><img src="svg/circle-right.svg" alt="" /></button>
        </div>
          <div className="glide__bullets" data-glide-el="controls[nav]">
    <button className="glide__bullet" data-glide-dir="=0"></button>
    <button className="glide__bullet" data-glide-dir="=1"></button>
    <button className="glide__bullet" data-glide-dir="=2"></button>
    <button className="glide__bullet" data-glide-dir="=3"></button>
        </div>
        </div>
        
      </div>
      </section>
  )
}

export default ImageGlider