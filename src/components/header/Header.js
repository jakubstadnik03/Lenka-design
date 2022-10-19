import React, {useState} from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export default function Header() {
    const [isActive, setIsActive] = useState(false);
      function hamburgerToggle(event){
        // event.currentTarget.classList.toggle('hamburger-clicked')
        setIsActive(current => !current);
      }
    return (
    <header>
      <nav className="navbar">
          <div className="navbar-container max-width">
              <Link to='/' className="navbar-logo"> 
              <img src="svg/lenka-deisgn-logo.svg" width="200" alt="Logo Lenka Design" />
              </Link>
              <div className={isActive ? 'hamburger-clicked hamburger-lines' : 'hamburger-lines'} onClick={hamburgerToggle}>
                  <span className="line line2"></span>
              </div>
              <ul className={isActive ? 'menu-items menu-clicked ' : 'menu-items'}>
                  <li className="underline"><Link to='/' className='nav-link bold'>Úvod</Link></li>
                  <li><Link to='/nase-sluzby' className='nav-link'>Naše služby</Link></li>
                  <li><Link to='/realizace' className='nav-link'>Realizace</Link></li>
                  <li><Link to='/vizualizace' className='nav-link'>Vizualizace</Link></li>
                  <li><Link to='/blog' className='nav-link'>Blog</Link></li>
                  <li><Link to='/reference' className='nav-link'>Reference</Link></li>
                  <li><Link to='/cenik' className='nav-link'>Ceník</Link></li>
                  <li><Link to='/kontakt' className='nav-contact'>Kontakt</Link></li>
              </ul>
  
          </div>
      </nav>
    </header>
    )
  }

