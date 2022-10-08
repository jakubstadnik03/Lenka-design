import React from 'react'
import Ico1 from '../../assets/svg/3d-design.svg'
import Ico2 from '../../assets/svg/2d-navrh.svg'
import Ico3 from '../../assets/svg/realizace.svg'
import Ico4 from '../../assets/svg/konzultace.svg'
import Ico5 from '../../assets/svg/home-staging.svg'
import {HashLink as Link} from 'react-router-hash-link'

function SluzbyNav() {
  return (
    <div className="max-width">
            <h1>Naše služby</h1>
            <div className="sluzby scroll">
                <Link to="#3d-navrhy-interieru"><figure>
                    <figcaption><h2>3D návrhy interiérů</h2></figcaption>
                    <img src={Ico1} alt="3D návrhy interiérů ikona"/>
                </figure></Link>
                <Link to="#2d-navrhy-interieru"><figure>
                    <figcaption><h2>2D návrhy dispozic</h2></figcaption>
                    <img src={Ico2} alt="2D návrhy dispozic ikona"/>
                </figure></Link>
                <Link to="#realizace"><figure>
                    <figcaption><h2>Realizace</h2></figcaption>
                    <img src={Ico3} alt="Realizace"/>
                </figure></Link>
                <Link to="#konzultace"><figure>
                    <figcaption><h2>Konzultace</h2></figcaption>
                    <img src={Ico4} alt="Konzultace"/>
                </figure></Link>
                <Link to="#homestaging"><figure>
                    <figcaption><h2>Home Staging</h2></figcaption>
                    <img src={Ico5} alt="Home Staging"/>
                </figure></Link>
                
            </div>
    </div>
  )
}

export default SluzbyNav