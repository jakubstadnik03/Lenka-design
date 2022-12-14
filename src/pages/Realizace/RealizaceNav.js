import React from 'react'
import {HashLink as Link} from 'react-router-hash-link'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

function RealizaceNav() {
  return (
    <div className="max-width">
           <Fade bottom cascade><h1>Realizace</h1></Fade> 
           <Slide top cascade>
            <div className=" description scroll druhy">
                <Link to="#komercni_projekty"><figure>
                    <figcaption className="opacity">Komerční projekty</figcaption>
                    <img src="img/realizace/main/komercni_projekty_small_main.jpeg" alt="Komerční projekty"/>
                </figure></Link>
                <Link to="#maly_byt">
                    <figure>
                        <figcaption className="opacity">Malý byt</figcaption>
                        <img src="img/realizace/main/maly_byt_small_main.jpeg" alt="Malý byt"/>
                    </figure>
                </Link>
                <Link to="#cely_dum">
                    <figure>
                        <figcaption className="opacity">Celý dům</figcaption>
                        <img src="img/realizace/main/cely_dum_small_main.jpeg" alt="Celý dům"/>
                    </figure>
                </Link>
                <Link to="#homestaging">
                    <figure>
                        <figcaption className="opacity">Homestaging</figcaption>
                        <img src="img/realizace/main/homestaging_small_main.jpeg" alt="Homestaging"/>
                    </figure>
                </Link>
                <Link to="#kuchyne">
                    <figure>
                        <figcaption className="opacity">Kuchyně</figcaption>
                        <img src="img/realizace/main/kuchyne_small_main.jpeg" alt="Kuchyně"/>
                    </figure>
                </Link>
                <Link to="#obyvaci_pokoje">
                    <figure>
                        <figcaption className="opacity">Obývací pokoje</figcaption>
                        <img src="img/realizace/main/obyvaci_pokoje_small_main.jpeg" alt="Obývací pokoje"/>
                    </figure>
                </Link>
                <Link to="#detske_pokoje">
                    <figure>
                        <figcaption className="opacity">Dětské pokoje</figcaption>
                        <img src="img/realizace/main/detske_pokoje_small_main.jpeg" alt="Dětské pokoje"/>
                    </figure>
                </Link>
                <Link to="#loznice">
                    <figure>
                        <figcaption className="opacity">Ložnice</figcaption>
                        <img src="img/realizace/main/loznice_small_main.jpeg" alt="Ložnice"/>
                    </figure>
                </Link>
               <Link to="#koupelny">
                    <figure>
                        <figcaption className="opacity">Koupelny</figcaption>
                        <img src="img/realizace/main/koupelny_small_main.jpeg" alt="Koupelny"/>
                    </figure>
               </Link>
                <Link to="#wellness">
                    <figure>
                        <figcaption className="opacity">Wellness</figcaption>
                        <img src="img/realizace/main/wellness_small_main.jpeg" alt="Wellness"/>
                    </figure>
                </Link>
                <Link to="#chodby">
                    <figure>
                        <figcaption className="opacity">Chodby</figcaption>
                        <img src="img/realizace/main/chodby_small_main.jpeg" alt="Chodby"/>
                    </figure>
                </Link>
                <Link to="#nabytek_na_miru">
                    <figure>
                        <figcaption className="opacity">Nábytek na míru</figcaption>
                        <img src="img/realizace/main/nabytek_na_miru_small_main.jpeg" alt="Nábytek na míru"/>
                    </figure>
                </Link>
            </div>
            </Slide>
          </div>
  )
}

export default RealizaceNav