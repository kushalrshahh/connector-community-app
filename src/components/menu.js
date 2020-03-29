import React from 'react'
import { Link } from "gatsby"

//Stylesheets
import "../styles/components/menu.scss"

export default () => {
  return (
    <nav className="primary-navigation">
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/profile">Login</Link>
        </li>
      </ul>
    </nav>
  );
}