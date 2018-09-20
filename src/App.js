import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/layout/Dashboard';
import AddImplant from './components/implants/AddImplant';
import ImplantDetails from './components/implants/ImplantDetails';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/implant/add" component={AddImplant} />
              <Route exact path="/implant/:id" component={ImplantDetails} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
