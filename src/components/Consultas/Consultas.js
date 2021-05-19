import React, { Component } from 'react';
import { ConsultarConsultas } from './../../services/consultas';

class Consultas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      realizadas: [],
      marcadas: [],
    };
  }

  componentDidMount() {
    ConsultarConsultas((dados) => this.setState(dados));
  }

  render() {
    return (
      <div>
        <h3 className="mt-3">Consultas</h3>
        <div className="row">
          <div className="col">
            <div className="card mt-2 mb-5">
              <div className="card-header">Realizadas</div>
              <table className="table">
                <thead>
                  <tr>
                    <th>Especialidade</th>
                    <th>Quantidade</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.realizadas.map((item, indice) => {
                    return (
                      <tr key={indice}>
                        <td>{item.especialidade}</td>
                        <td>{item.quantidade}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col">
            <div className="card mt-2">
              <div className="card-header">Marcadas</div>
              <table className="table">
                <thead>
                  <tr>
                    <th>Especialidade</th>
                    <th>Quantidade</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.marcadas.map((item, indice) => {
                    return (
                      <tr key={indice}>
                        <td>{item.especialidade}</td>
                        <td>{item.quantidade}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Consultas;
