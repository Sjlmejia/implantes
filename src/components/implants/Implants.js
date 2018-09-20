import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import './Implants.css';

class Implants extends Component {
  deletePacient = implant => {
    console.log('this.props', this.props);
    const { firestore } = this.props;
    firestore.delete({ collection:'implants' }, implant);
  }
  render() {
    const { implants } = this.props;
    if( implants ) {
      const implantsComponent = implants.map(implant =>{
        return <div className="description" key={implant.id}>
          <div className="pacient">{implant.nombre}</div>
          <div className="pacient">{implant.apellido}</div>
          <div className="pacient">{implant.marca}</div>
          <div className="pacient">{implant.cirugiaEfectuada}</div>
          <div className="pacient-action">
          <Link to={`/implant/${implant.id}`}
                className="btn btn-outline-secondary">
                Detalles</Link>
          </div>
          <div className="pacient-action">
          <button className="btn btn-outline-danger" onClick={()=>
              this.props.firestore.collection('implants')
                                  .doc(implant.id)
                                  .delete()}>
              Eliminar</button>
          </div>
        </div>
      });
      return (
        <div className="container-pacientes">
          <div className="col-md-6">
            <h2>
              <i className="fas fa-users"/>
            Pacientes</h2>
          </div>
          <div className="container-pacientes-header">
            <div className="pacient"><h5>Nombres</h5></div>
            <div className="pacient"><h5>Apellidos</h5></div>
            <div className="pacient"><h5>Marca</h5></div>
            <div className="pacient"><h5>Cirugía</h5></div>
            <div className="pacient-action"></div>
            <div className="pacient-action"></div>
          </div>
          {implantsComponent}
        </div>
      );
    }
    else {
      return <h1>Loading...</h1>
    }
  }
}

Implants.propTypes = {
  firestore: PropTypes.object.isRequired,
  implants: PropTypes.array
}

export default compose(
  firestoreConnect([{ collection: 'implants'}]),
  connect((state, props)=>({
    implants: state.firestore.ordered.implants
  }))
)(Implants);
