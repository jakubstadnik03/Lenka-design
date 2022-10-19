import React from 'react'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';



function CenikSluzeb() {
  return (
      <div className='max-width'>
          <Fade bottom cascade>
      <h2>Ceník služeb:</h2>
      </Fade>
    <div className="price ">
                       <Fade bottom>
                            <ul>
                                <li><strong>Konzultace nad projektem či změn v interiéru </strong> <span>1100 Kč/1hod.</span></li>
                                <li><strong>3D vizualizace jedné místnosti</strong><span>5500 - 6500 Kč</span></li>
                                <li><strong>Návrh dispozic interiéru ve 2D</strong><span>2500 - 4000 Kč</span></li>
                                <li><strong>On-Line 3D vizualizace jedné místnosti</strong><span>5000 - 6000 Kč</span></li>
                                <li><strong>Návrh celé místnosti: dispozice + 3D vizualizace + balíček</strong><span>7500 - 10000 Kč</span></li>
                            </ul>
                       </Fade>
                        
                    </div>
                    <div className="price">
                        <Fade bottom>
                        <ul>
                            <li><strong>Návrh celého bytu: dispozice + 3D vizualizace + balíček</strong> <span>od 25 000 Kč</span></li>
                            <li><strong>Návrh rodinného domu: dispozice + 3D vizualizace + balíček</strong><span>od 38 000 Kč</span></li>
                        </ul>
                        </Fade>
                    </div>
                    <div className="price">
                        <Fade bottom>
                        <ul>
                            <li><strong>Konzultace s klientem v terénu či v showroomu</strong><span>500Kč/hod.</span></li>
                            <li><strong>Doprava mimo Liberec</strong><span>10Kč/km</span></li>
                            <li><strong>Home staging bytu</strong> <span>od 7000Kč</span></li>
                            <li><strong>Fotodokumentace nemovitosti</strong><span>od 2500 Kč</span></li>
                        </ul>
                        </Fade>
                    </div>
                    </div>
                
  )
}

export default CenikSluzeb