import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import ReactPDF, { Document, Page, Text, View, StyleSheet  } from '@react-pdf/renderer';

import './Implants.css';

class ImplantDetails extends Component {
  render() {
    const { implant } = this.props;
    // Create styles
    const styles = StyleSheet.create({
      page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
      },
      section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
      }
    });
    const MyDocument = () => (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>Section #1</Text>
          </View>
          <View style={styles.section}>
            <Text>Section #2</Text>
          </View>
        </Page>
      </Document>
    );
    const downloadDocument = () =>{
      console.log('se ejecuto');
      ReactPDF.render(<MyDocument />, '/example.pdf');
    }
    if(implant) {
      return (
        <div>
          <Link to="/"
            className="badge badge-secondary">
            <i className="fas fa-arrow-circle-left" />Atras
          </Link>
          <button className="btn btn-outline-info" onClick={downloadDocument}>
            Descargar
          </button>
          <div className="card">
            <div className="card-header">
                <h2>{implant.nombre} {implant.apellido}</h2>
            </div>
            <div className="card-body">
              <div className="row row-detail">
                <h6 className="title-detail">Cirugía Efectuada: </h6>
                <span className="item-detail">{implant.cirugiaEfectuada}</span>
              </div>
              <div className="row row-detail">
                <h6 className="title-detail">Edad: </h6>
                <span className="item-detail">{implant.edad}</span>
              </div>
              <div className="row row-detail">
                <h6 className="title-detail">Fecha de Colocación: </h6>
                <span className="item-detail">{implant.fechaColocacion}</span>
              </div>
              <div className="row row-detail">
                <h6 className="title-detail">Fecha de Caducidad: </h6>
                <span className="item-detail">{implant.caducidad}</span>
              </div>
              <div className="row row-detail">
                <h6 className="title-detail">Implante de Mama Derecha: </h6>
                <span className="item-detail">{implant.implanteDerecha}</span>
              </div>
              <div className="row row-detail">
                <h6 className="title-detail">Implante de Mama Izquierda: </h6>
                <span className="item-detail">{implant.implanteIzquierda}</span>
              </div>
              <div className="row row-detail">
                <h6 className="title-detail">Marca: </h6>
                <span className="item-detail">{implant.marca}</span>
              </div>
              <div className="row row-detail">
                <h6 className="title-detail">Medida: </h6>
                <span className="item-detail">{implant.medida}</span>
              </div>
              <div className="row row-detail">
                <h6 className="title-detail">Referencia: </h6>
                <span className="item-detail">{implant.referencia}</span>
              </div>
              <div className="row row-detail">
                <h6 className="title-detail">Volumen: </h6>
                <span className="item-detail">{implant.volumen}</span>
              </div>
              <div className="row row-detail">
                <h6 className="title-detail">Observaciones: </h6>
                <span className="item-detail">{implant.observacion}</span>
              </div>
              <div className="row row-detail row-detail-sign">
                <h6 className="title-detail">Firma: </h6>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <h1>Loading...</h1>
    }
  }
}

ImplantDetails.propTypes ={
  firestore: PropTypes.object.isRequired
}

export default compose(
  firestoreConnect(props =>[
    {collection: 'implants', storeAs: 'implant', doc: props.match.params.id}
]),
  connect(({firestore: { ordered }}, props)=>({
    implant: ordered.implant && ordered.implant[0]
  }))
)(ImplantDetails);
