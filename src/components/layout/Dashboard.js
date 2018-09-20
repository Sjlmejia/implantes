import React, { Component } from 'react';

import Implants from '../implants/Implants';
import Sidebar from '../layout/Sidebar';

import './Dashboard.css';
class Dashboard extends Component {
  render() {
    return (
      <div className="row">
        <div className="container-implants col-md-10">
          <Implants />
        </div>
        <div className="container-sidebar col-md-2">
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default Dashboard;
