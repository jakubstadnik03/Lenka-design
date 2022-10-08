import React from 'react'
import {HashLink as Link} from 'react-router-hash-link'

function RealizaceNav() {
  return (
    <div class="max-width">
            <h1>Vizualizace</h1>
            <div className=" description scroll druhy">
                <Link to="#komercni_projekty"><figure>
                    <figcaption className="opacity">Komerční projekty</figcaption>
                    <img src="img/vizualizace/komercni_projekty_small_main.jpg" alt="Komerční projekty"/>
                </figure></Link>
                <Link to="#cely_dum">
                    <figure>
                        <figcaption className="opacity">Celý dům</figcaption>
                        <img src="img/vizualizace/cely_dum_small_main.jpg" alt="Celý dům"/>
                    </figure>
                </Link>

                <Link to="#kuchyne">
                    <figure>
                        <figcaption className="opacity">Kuchyně</figcaption>
                        <img src="img/vizualizace/kuchyne_small_main.jpg" alt="Kuchyně"/>
                    </figure>
                </Link>
                <Link to="#obyvaci_pokoje">
                    <figure>
                        <figcaption className="opacity">Obývací pokoje</figcaption>
                        <img src="img/vizualizace/obyvaci_pokoje_small_main.jpg" alt="Obývací pokoje"/>
                    </figure>
                </Link>
                <Link to="#detsky_pokoje">
                    <figure>
                        <figcaption className="opacity">Dětské pokoje</figcaption>
                        <img src="img/vizualizace/detske_pokoje_small_main.jpg" alt="Dětské pokoje"/>
                    </figure>
                </Link>
                <Link to="#loznice">
                    <figure>
                        <figcaption className="opacity">Ložnice</figcaption>
                        <img src="img/vizualizace/loznice_small_main.jpg" alt="Ložnice"/>
                    </figure>
                </Link>
               <Link to="#koupelny">
                    <figure>
                        <figcaption className="opacity">Koupelny</figcaption>
                        <img src="img/vizualizace/koupelny_small_main.jpg" alt="Koupelny"/>
                    </figure>
               </Link>
                <Link to="#wellness">
                    <figure>
                        <figcaption className="opacity">Wellness</figcaption>
                        <img src="img/vizualizace/wellness_small_main.jpg" alt="Wellness"/>
                    </figure>
                </Link>
            </div>
          </div>
  )
}

export default RealizaceNav