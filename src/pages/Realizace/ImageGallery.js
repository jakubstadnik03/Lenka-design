import React from 'react';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import Fade from 'react-reveal/Fade';
import { LazyLoadImage } from "react-lazy-load-image-component";



function ImageGallery(props) {

    return (
        <div className="sluzba max-width">
            <div className='sluzba-text-wrapper'>
            <Fade bottom cascade>
                <h2 id={props.id} className='sluzba-title'>{props.title}</h2>
                <p>{props.text}</p>
                </Fade>
            </div>
            <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                {props.render.map((item, index) => (
                    <a href={item.image} key={index}>
                    <LazyLoadImage alt={props.title} src={item.thumbnail} className='gallery-img' loading="lazy"/>
                    </a>

                ))}
                
            </LightGallery>
        </div>
    );
    
}
export default ImageGallery
