import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <Link className="nav-link" to='/'>Root</Link>
    </li>

    <li className="nav-item">
      <Link className="nav-link" to='/container'>Container Pattern</Link>
    </li>

    <li className="nav-item">
      <Link className="nav-link" to='/hoc'>HOC Pattern</Link>
    </li>

    <li className="nav-item">
      <Link className="nav-link" to='/renderprops'>Render Props Pattern</Link>
    </li>
  </ul>
)

export default Nav
