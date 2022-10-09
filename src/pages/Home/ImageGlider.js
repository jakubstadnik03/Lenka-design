import React, { useEffect } from "react"
import Glide, { Controls, Breakpoints, Autoplay } from '@glidejs/glide/dist/glide.modular.esm'
import Image1 from '../../assets/img/uvod/uvod_large_2_1920.jpg'
import Image2 from '../../assets/img/uvod/uvod_large_3_1920.jpg'
import Image3 from '../../assets/img/uvod/uvod_large_4.jpg'
import Image4 from '../../assets/img/uvod/uvod_large_5.jpg'
import ArrowRight from '../../assets/svg/circle-right.svg'
import ArrowLeft from '../../assets/svg/circle-left.svg'
import '@glidejs/glide/dist/css/glide.core.min.css'
import '@glidejs/glide/dist/css/glide.theme.min.css'
import './slider.css'


  const ImageGlider = () => {
    // const slider = new Glide('.glide', {
    //   type: 'slider',
    //   autoplay: 4000,
    // });
    const slider = new Glide('.glide'); 
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
      <h1 className="none">Lenka Design</h1>
      {" "}
      <div className='glide'>
        <div className='glide__track' data-glide-el='track' >
          <ul className='glide__slides' >
            <li className='glide__slide slider'><img src={Image1} style={GlideSlideImageStyles} alt="" /></li>
            <li className='glide__slide slider'><img src={Image2} style={GlideSlideImageStyles} alt="" /></li>
            <li className='glide__slide slider'><img src={Image3} style={GlideSlideImageStyles} alt="" /></li>
            <li className='glide__slide slider'><img src={Image4} style={GlideSlideImageStyles} alt="" /></li>
          </ul>
          <div className='glide__arrows' data-glide-el='controls'>
          <button className='glide__arrow glide__arrow--prev' data-glide-dir='<'><img src={ArrowLeft} alt="" /></button>
          <button className='glide__arrow glide__arrow--next' data-glide-dir='>' style={GlideArrowRightStyles} ><img src={ArrowRight} alt="" /></button>
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