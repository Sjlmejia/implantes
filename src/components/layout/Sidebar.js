import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Sidebar extends Component {
  render() {
    return (
      <div>
        <Link to="/implant/add" className="btn btn-outline-dark btn-add-implant">
          <i className="fas fa-plus" /> Nuevo
        </Link>
      </div>
    );
  }
}

export default Sidebar;
