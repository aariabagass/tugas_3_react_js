import React, { Component } from 'react';

class Menut extends Component {
  constructor (props) {
    super(props);
    this.state={
      tentang: "Warung Nusantara Adalah Restoran Yang Bernuansa Masakan Nusantara, Kami Ada Untuk Membuat Anda Menikmati Makanan Khas Dari Nusantara"
    };
  };

    render () {
    return (
      <div>
      <center>
      <p>Tentang Kami </p>{this.state.tentang}
      </center>
      </div>
    );
  };
};

export default Menut;