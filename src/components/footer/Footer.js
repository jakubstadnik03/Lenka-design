import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export default function Footer(){
    return ( 
        <footer>
        <div className="max-width">
            <div className="row">
                <div className="footer-col">
                    <h4>Naše služby</h4>
                    <ul>
                        <li><Link to='/navrhy-bytovych-interieru'>Návrhy bytových interiérů</Link></li>
                        <li><Link to='/navrhy-komercnich-inetrieru'>Návrhy komerčních interiérů</Link></li>
                        <li><Link to='/homestaging'>Homestaging</Link></li>
                        <li><Link to='/konzultace'>Konzultace</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Užitečné</h4>
                    <ul>
                        <li><Link to='/darkovy-poukaz'>Dárkový poukaz</Link></li>
                        <li><Link to='/reference'>Reference</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Kontakt</h4>
                    <ul>
                        <li><div>Minkovická 170 46312 Šimonovice, Liberec Česká republika</div></li>
                        <li><a href="tel:+420723838086">Telefon: +420 723 838 086</a></li>
                        <li><a href="mailto:tadnikovalenka@gmail.com">E-mail: stadnikovalenka@gmail.com</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>sledujte nás</h4>
                    <div className="social-links">
                        <a href="https://www.facebook.com/lenkadesign.cz"><img src="svg/facebook.svg" alt="" /></a>
                        <a href="https://www.instagram.com/designlenka/?hl=cs"><img src="svg/instagram.svg" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
   </footer>
    )
}
