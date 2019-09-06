import React, { Component } from 'react';

class Listm extends Component {
  constructor (props) {
    super(props);
    this.state={
      datalist: this.props.sumber
    };
  };

    render () {
    return (
      <div>
      <img src={this.state.datalist} alt="Produk Makanan"  width="150" />
      </div>
    );
  };
};

export default Listm;