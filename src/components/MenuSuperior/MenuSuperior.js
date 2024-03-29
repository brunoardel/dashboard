import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MenuSuperior extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/dashboard" className="navbar-brand">
          Dashboard React
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link">
                Resumo
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard/consultas" className="nav-link">
                Consultas
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard/faturamento" className="nav-link">
                Faturamento
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default MenuSuperior;
