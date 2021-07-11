import React from 'react'
import {NavLink} from 'react-router-dom'

function Contact (){
  return(
    <div>
      <h1>Kontakt</h1>
      <NavLink exact to="/">
        <p>tillbaka</p>
      </NavLink>
    </div>
  )
}
export default Contact