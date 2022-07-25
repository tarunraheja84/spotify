import React from 'react'
import logo from "./images/logo.png"
import "./style.css"

function Navbar() {
  return (
    <div>
      <nav>
          <ul>
              <li className="brand"><img src={logo} alt="Spotify"/> Spotify</li>
          </ul>
      </nav>
    </div>
  )
}

export default Navbar
