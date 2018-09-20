import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';

import { firestoreConnect } from 'react-redux-firebase';

class AddImplant extends Component {
  state = {
    nombre: '',
    apellido: '',
    marca: '',
    caducidad: '',
    cirugiaEfectuada: '',
    fechaNacimiento: '',
    fechaColocacion: '',
    implanteDerecha: '',
    implanteIzquierda: '',
    medida: '',
    volumen: '',
    referencia: '',
    observacion: ''
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = e => {
    e.preventDefault();
    const pacient = this.state;
    const { firestore, history } = this.props;
    firestore.add({ collection:'implants' }, pacient).then(() =>{
      history.push('/');
      toast.success("Se guardo el paciente", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    });
  }
  render() {
    return (
      <div>
        <ToastContainer position="top-right"
                        autoClose={3000}
                        hideProgressBar={true}
                        closeOnClick
                        pauseOnVisibilityChange
                        draggable
                        pauseOnHover/>
        <div className="row">
          <div>
            <Link to="/"
                  className="badge badge-secondary">
              <i className="fas fa-arrow-circle-left" />Atras
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h2>Agregar Paciente</h2>
          </div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="nombre">Nombres</label>
                <input type="text" className="form-control" name="nombre" placeholder="Ingrese los Nombres"
                  onChange={this.onChange} value={this.state.nombre}/>
              </div>
              <div className="form-group">
                <label htmlFor="apellido">Apellidos</label>
                <input type="text" className="form-control" name="apellido" placeholder="Ingrese los Apellidos"
                  onChange={this.onChange} value={this.state.apellido}/>
              </div>
              <div className="form-group">
                <label htmlFor="marca">Marca</label>
                <input type="text" className="form-control" name="marca" placeholder="Ingrese la Marca"
                  onChange={this.onChange} value={this.state.marca}/>
              </div>
              <div className="form-group">
                <label htmlFor="caducidad">Fecha de Caducidad</label>
                <input type="date" className="form-control" name="caducidad"
                  onChange={this.onChange} value={this.state.caducidad}/>
              </div>
              <div className="form-group">
                <label htmlFor="cirugiaEfectuada">Cirugía Efectuada</label>
                <input type="text" className="form-control" name="cirugiaEfectuada" placeholder="Cirugía Efectuada"
                  onChange={this.onChange} value={this.state.cirugiaEfectuada}/>
              </div>
              <div className="form-group">
                <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
                <input type="date" className="form-control" name="fechaNacimiento"
                  onChange={this.onChange} value={this.state.fechaNacimiento}/>
              </div>
              <div className="form-group">
                <label htmlFor="fechaColocacion">Fecha de Colocación</label>
                <input type="date" className="form-control" name="fechaColocacion"
                  onChange={this.onChange} value={this.state.fechaColocacion}/>
              </div>
              <div className="form-group">
                <label htmlFor="implanteDerecha">Implante de Mama Derecha</label>
                <input type="date" className="form-control" name="implanteDerecha" placeholder="Cirugía Efectuada"
                  onChange={this.onChange} value={this.state.implanteDerecha}/>
              </div>
              <div className="form-group">
                <label htmlFor="implanteIzquierda">Implante de Mama Izquierda</label>
                <input type="date" className="form-control" name="implanteIzquierda" placeholder="Cirugía Efectuada"
                  onChange={this.onChange} value={this.state.implanteIzquierda}/>
              </div>
              <div className="form-group">
                <label htmlFor="medida">Medida</label>
                <input type="text" className="form-control" name="medida" placeholder="Ingrese la Medida"
                  onChange={this.onChange} value={this.state.medida}/>
              </div>
              <div className="form-group">
                <label htmlFor="volumen">Volumen</label>
                <input type="text" className="form-control" name="volumen" placeholder="Volumen"
                  onChange={this.onChange} value={this.state.volumen}/>
              </div>
              <div className="form-group">
                <label htmlFor="referencia">Referencia</label>
                <input type="text" className="form-control" name="referencia" placeholder="Referencia"
                  onChange={this.onChange} value={this.state.referencia}/>
              </div>
              <div className="form-group">
                <label htmlFor="observacion">Observaciones</label>
                <textarea className="form-control" name="observacion" placeholder="Observaciones"
                  onChange={this.onChange} value={this.state.observacion}/>
              </div>
              <input type="submit" value="Agregar Paciente" className="btn btn-outline-dark btn-block"/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

AddImplant.propTypes ={
  firestore: PropTypes.object.isRequired
}
export default firestoreConnect(

)(AddImplant);
