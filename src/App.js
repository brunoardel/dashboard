import React, { Component } from 'react';
import MenuSuperior from './components/MenuSuperior/MenuSuperior';
import Resumo from './components/Resumo/Resumo';
import Consultas from './components/Consultas/Consultas';
import Faturamento from './components/Faturamento/Faturamento';
import { Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <MenuSuperior />
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <Switch>
                <Route
                  exact
                  path="/dashboard/consultas"
                  component={Consultas}
                />
                <Route
                  exact
                  path="/dashboard/faturamento"
                  component={Faturamento}
                />
                <Route exact path="/dashboard" component={Resumo} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
