import React from 'react'
import photo from '../../public/andres.png'

const Header = () => {
  return (
    <div className="hero">
        <h2>Emoji Selection</h2>
        <img src={photo} alt="Andres" />
        <h3>Andrés Yépez</h3>
    </div>

  )
}

export default Header