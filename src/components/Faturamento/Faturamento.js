import React, { Component } from 'react';
import { ConsultarFaturamento } from './../../services/faturamento';

class Faturamento extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detalhamento: [],
    };
  }

  componentDidMount() {
    ConsultarFaturamento((dados) => this.setState(dados));
  }

  render() {
    return (
      <div>
        <h3 className="mt-3">Faturamento</h3>
        <div className="row">
          <div className="col">
            <div className="card mt-2">
              <div className="card-header">Total por forma de pagamento</div>
              <table className="table">
                <thead>
                  <tr>
                    <th>Descrição</th>
                    <th className="text-right">Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.detalhamento.map((item, indice) => {
                    return (
                      <tr key={indice}>
                        <td>{item.descricao}</td>
                        <td className="text-right">
                          {item.valor.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                          })}
                        </td>
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

export default Faturamento;
