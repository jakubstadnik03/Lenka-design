import React from 'react'
import './sections.css'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
function Sections() {
  return (
    <div>
        <section className='max-width'>
        <Fade bottom cascade><h2>Naše služby</h2></Fade>
        <section className="max-width uvodni_text texty ">
    <Fade left>
        <p className='uvodni-text-bold'><strong> Chcete svůj interiér změnit, zútulnit a cítit se v něm příjemně?</strong></p>
        <p className='uvodni-text-bold'><strong>Stavíte dům či předěláváte byt a nevíte, jak vše nejlépe uspořádat a zařídit?</strong></p>
    </Fade>
 </section>
       <Slide top cascade>
           <div className="sluzby-wrapper scroll">
               <figure className='sluzby-box' id="Navrhy_bytovych_interieru">
                   
                      <figcaption className='sluzby-title'><Link to='/navrhy-bytovych-interieru'>Návrhy bytových interiérů</Link></figcaption>
                      <img src="img/sluzby/navrhy_bytovych_interieru_small.jpg" alt="Návrh bytovýho interiéru"/>
                   
               </figure>
               <figure className='sluzby-box' id="Navrhy_komercnich_interieru">
                    <figcaption className='sluzby-title'><Link to='/navrhy-komercnich-inetrieru'>Návrhy komerčních interiérů</Link></figcaption>
                      <img src="img/sluzby/navrhy_komercnich_interieru_small.jpg" alt="Návrh komerčních interiérů"/>
                   
               </figure>
               <figure className='sluzby-box' id="Homestaging">
                  
                  <figcaption className='sluzby-title'><Link to='/homestaging'>Homestaging</Link></figcaption>
                  <img src="img/sluzby/homestaging_small.jpg" alt="Homestaging" />
                   
               </figure>
               <figure className='sluzby-box' id="Konzultace">
                      <figcaption className='sluzby-title'><Link to='/konzultace'>Konzultace</Link></figcaption>
                      <img src="img/sluzby/konzultace_small.jpg" alt="Konzultace" />
                   
               </figure>
               
           </div>
       </Slide>
    </section>
     <Fade top>
          <section className="max-width uvodni_text texty ">
          <h2 className="none">Design interiéru v Liberci</h2>
           <p>Věnuji se návrhům interiérů, bytovému designu a Home stagingu již přes 8let, mým cílem je, aby každý klient byl spokojen. Mohu Vám nabídnout 3D vizualizaci, návrhy dispozic nebo jen osobní konzultaci v interiérovém designu. Pracuji i online a přes videokonference. Soustředím se na projekty a návrhy interiérů v Liberci a okolí. Upřednostňuji přírodní materiály či jejich imitace. Mojí největší inspirací je příroda. Příroda nás vytvořila, ovlivňuje nás, a proto se v její blízkosti cítíme nejlépe. Nechci Vás ale ovlivňovat mým stylem, mým cílem je pochopit ten Váš a pomoci Vám zrealizovat Váš sen, který máte… </p>
       </section>
     </Fade>
 <Fade bottom>
    <section id="citat" className="max-width texty citat ">
       <h2 className="none">Lenka Stádníková</h2>
       <p>Každého z nás ovlivňuje a formuje, jak bydlíme, někdy stačí jen málo a dojde k veliké změně a člověk se doma cítí hned lépe.</p>
      <p>  Doporučuji konzultace s designérem již v době hrubé stavby, ušetříte si stres i náklady do budoucna. Vkusně, prakticky a zodpovědně dojdeme ke správnému cíli.</p>
        <p>Mga. Lenka Stádníková</p>
    </section>
 </Fade>
 <section id="o-mne" className="max-width texty max-width">
    <h2 className="none">Lenka Stádníková Design</h2>
    <Fade left><img src="img/lenka.jpg" alt="Lenka Stádníková" className="portret" /></Fade>
    <Fade right>
       <div className="o_mne_text">
          <p>Po absolvování Technické univerzity v Liberci v oboru Podniková Ekonomika jsem žila 14 let v zahraničí (USA, Holandsku a Velké Británii), vychovávala 3 děti, čerpala jsem inspirace a zkušenosti nejen životní, ale i profesní. Po mnoha stěhování, přestavbách  domů  i stavbě vlastního domu a chalupy, jsem se rozhodla změnit svou profesi a studovat Interiérový design. Ve Velké Británii jsem absolvovala studium bakalářského a poté magisterského Interiérového designu. Moc mě to bavilo, až se architektura a design stali mojí prací i koníčkem.</p>
          <p>Pod vlastní firmou jsem zpracovala již stovku projektů, konzultací, rekonstrukcí a novostaveb. Nadále se k tomu vzdělávám, sleduji nejnovější trendy, inovace a veletrhy, aby moje záliba ušetřila klientům čas pomohla plnit jejich sny.</p>
       </div>
    </Fade>
 </section>
    </div>
  )
}

export default Sections