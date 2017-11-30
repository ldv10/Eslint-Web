import React, { Component } from 'react';

class Operador extends Component{
  render() {
    return (
      <button onClick={this.props.onClick}>{this.props.Operador}</button>
    );
  }
}

export default Operador;
