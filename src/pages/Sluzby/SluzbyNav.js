import React from 'react'
import {HashLink as Link} from 'react-router-hash-link'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

function SluzbyNav() {
  return (
    <div className="max-width">
            <Fade bottom cascade><h1>Naše služby</h1></Fade>
                <Slide top cascade>
            <div className="sluzby scroll">
                    <Link to="#3d-navrhy-interieru"><figure>
                        <figcaption><h2>3D návrhy interiérů</h2></figcaption>
                        <img src="svg/3d-design.svg" alt="3D návrhy interiérů ikona"/>
                    </figure></Link>
                    <Link to="#2d-navrhy-interieru"><figure>
                        <figcaption><h2>2D návrhy dispozic</h2></figcaption>
                        <img src="svg/2d-navrh.svg" alt="2D návrhy dispozic ikona"/>
                    </figure></Link>
                    <Link to="#realizace"><figure>
                        <figcaption><h2>Realizace</h2></figcaption>
                        <img src="svg/realizace.svg" alt="Realizace"/>
                    </figure></Link>
                    <Link to="#konzultace"><figure>
                        <figcaption><h2>Konzultace</h2></figcaption>
                        <img src="svg/konzultace.svg" alt="Konzultace"/>
                    </figure></Link>
                    <Link to="#homestaging"><figure>
                        <figcaption><h2>Home Staging</h2></figcaption>
                        <img src="svg/home-staging.svg" alt="Home Staging"/>
                    </figure></Link>
                
            </div>
                </Slide>
    </div>
  )
}

export default SluzbyNav