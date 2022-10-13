import React from 'react'
import Form from './Form'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import './kontakt.css'
import { Helmet } from 'react-helmet';
import Fade from 'react-reveal/Fade';

function Kontakt() {
  return (
    <>
    <Helmet>
        <title>Kontakt | Lenka Design</title>
        
    </Helmet>
      <Header />
      <main className='max-width'>
        <Fade bottom cascade><h1>Kontakt</h1></Fade>
        <Fade left><p><strong>Pište nebo volejte, ráda Vám pomohu a odpovím na Vaše otázky….</strong></p></Fade>
      <div className='layout'>
         <Form />
          <Fade right>
            <div className="contact-info">
    
              <ul>
                <li>Kontakt</li>
                <li> MgA. Lenka Stádníková</li>
                <li>Interiérová designérka</li>
              </ul>
    
              <address>
                Minkovická 170
                46312 Šimonovice, Liberec,
                Česká republika
              </address>
    
              <ul>
                <li>IČO: 03911446 </li>
                <li>DIČ: CZ7555242563</li>
              </ul>
    
              <div>Jsem plátcem DPH.</div>
    
    
              <ul>
                <li><a className="color" href="tel:+420-723-838-086">Telefon: +420 723 838 086</a></li>
                <li><a className="color" href="mailto:stadnikovi@gamil.com">E-mail: stadnikovalenka@gmail.com</a></li>
              </ul>
    
            </div>
          </Fade>
  
          <Fade bottom>
            <p className="gdpr">Vaše osobní údaje (e-mail, jméno a telefon) budu zpracovávat jen za účelem Vámi daným, ke kontaktování Vás z oblasti interiérového designu v souladu s platnou legislativou a <strong><a href="./gdpr.html">zásadami ochrany osobních údajů</a></strong>. Svůj souhlas se zasíláním a zpracováním osobních údajů můžete kdykoliv odvolat prostřednictvím odhlašovacího odkazu v každém emailu ode mě.
            </p> 
          </Fade>
        
      </div>
      </main>
      <Footer />
    </>
  )
}

export default Kontakt