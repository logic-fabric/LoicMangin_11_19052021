import React from "react";
import { Link } from "react-router-dom";

import "../css/Header.css";
import logo from "../logo.svg";

class Header extends React.Component {
  render() {
    return (
      <header>
        <img src={logo} alt="Kasa" />

        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="a-propos">&Agrave; propos</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
