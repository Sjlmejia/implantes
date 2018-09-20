import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Navbar extends Component {
  render() {
    return (
      <div className="container-dashboard">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">
              Implantes
            </Link>
            <button
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarMain">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarMain">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Página Principal
                  </Link>
                </li>
              </ul>
            </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
