import React, { Component } from 'react';
import './App.css';
import Numero from './Componentes/Numero';
import Operador from './Componentes/Operador';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posicion: 0,
      display: '',
      n1: '',
      n2: '',
      operation: '',
    };
  }

  Valor(numero) {
    if (this.state.posicion === 1) { 
      this.setState({
        display: this.state.n2 + numero,
        n2: this.state.n2 + numero,
      });
    } else {
      this.setState({
        display: this.state.display + numero,
        n1: this.state.n1 + numero,
      });
    }
  }
  operaciones(especiales) {
    if (especiales === 'AC') {
      this.setState({
        display: '',
        posicion: 0,
        n1: '',
        n2: '',
        operation: '',
      });
    } else if (especiales === '←') {
      if (this.state.posicion === 1) {
        this.setState({
          display: this.state.display.substr(0, this.state.display.length - 1),
          n2: this.state.n2.substr(0, this.state.n2.length - 1),
        });
      } else {
        this.setState({
          display: this.state.display.substr(0, this.state.display.length - 1),
          n1: this.state.n1.substr(0, this.state.n1.length - 1),
        });
      }
    } else if (especiales === '=') {
      const n1 = parseFloat(this.state.n1, 10);
      const n2 = parseFloat(this.state.n2, 10);
      let tot;


      switch (this.state.operation) {
        default:

          break;
        case '+':
          tot = n1 + n2;
          this.setState({
            display: tot,
            n1: tot,
            n2: '',
          });
          break;
        case '/':
          tot = n1 / n2;
          this.setState({
            display: tot,
            n1: tot,
            n2: '',
          });
          break;
        case '-':
          tot = n1 - n2;
          this.setState({
            display: tot,
            n1: tot,
            n2: '',
          });
          break;
        case 'x':
          tot = n1 * n2;
          this.setState({
            display: tot,
            n1: tot,
            n2: '',
          });
          break;
      }
    } else {
      this.setState({
        display: this.state.display + especiales,
        posicion: 1,
        operation: especiales,
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="top" />
        <div className="top" />
        <br />


        <input className="Display" placeholder="Leonel Guillen - 14451" value={this.state.display} maxLength='9' />
        <br />

        <Numero valor="1" onClick={this.Valor.bind(this, 1)} />
        <Numero valor="2" onClick={this.Valor.bind(this, 2)} />
        <Numero valor="3" onClick={this.Valor.bind(this, 3)} />
        <Numero valor="4" onClick={this.Valor.bind(this, 4)} />



        <br />


        <Numero valor="5" onClick={this.Valor.bind(this, 5)} />
        <Numero valor="6" onClick={this.Valor.bind(this, 6)} />
        <Numero valor="7" onClick={this.Valor.bind(this, 7)} />
        <Numero valor="8" onClick={this.Valor.bind(this, 8)} />


        <br />


        <Numero valor="9" onClick={this.Valor.bind(this, 9)} />
        <Numero valor="0" onClick={this.Valor.bind(this, 0)} />
          <Numero valor="." onClick={this.Valor.bind(this, '.')} />
            <Operador Operador="←" onClick={this.operaciones.bind(this, '←')} />


        <br />

          <Operador Operador="÷" onClick={this.operaciones.bind(this, '/')} />
        <Operador Operador="x" onClick={this.operaciones.bind(this, 'x')} />
        <Operador Operador="+" onClick={this.operaciones.bind(this, '+')} />
        <Operador Operador="-" onClick={this.operaciones.bind(this, '-')} />
        <br />
        <Operador Operador="=" onClick={this.operaciones.bind(this, '=')} />

        <Operador Operador="Clean" id="Limpiar" onClick={this.operaciones.bind(this, 'AC')} />

        <div className="top" />

      </div>
    );
  }
}

export default App;
