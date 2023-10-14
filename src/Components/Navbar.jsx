import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Assets/Logo.png'

function closeMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle.checked) {
      menuToggle.checked = false;
    }
  }
  
  
  export default function NavBar() {
    return (
      <div className='NavBar'>
        <section class="top-nav">
          <input id="menu-toggle" type="checkbox" />
          <label class='menu-button-container' for="menu-toggle">
            <div class='menu-button'></div>
          </label>
          <div className='top-nav_title'>
            <h2>PoseidonPulse</h2>
            <p>Des solutions durable pour tous</p>
          </div>
          <a className="NavBar__logo"href="/">
                <img class="Logo" src={Logo} alt="" />
          </a>
  
  
          <ul className='menu'>
            <li><Link to="/" onClick={closeMenu}>Accueil</Link></li>
            <li><Link to="/connexion" onClick={closeMenu}>Connexion</Link></li>
            <li><Link to="/peche" onClick={closeMenu}>La pêche</Link></li>
            <li><Link to="/chasse" onClick={closeMenu}>La chasse</Link></li>
            <li><Link to="/agriculture" onClick={closeMenu}>L'agriculture</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
            
  
          </ul>
        </section>
  
      </div>
    )
  }