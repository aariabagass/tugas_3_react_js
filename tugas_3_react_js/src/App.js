import React, { Component } from 'react';
import Header from "./Page/Header.js"
import Footer from "./Page/Footer.js"
import Menum from "./Page/MenuMakanan.js"
import Menuk from "./Page/MenuKontak.js"
import Menut from "./Page/MenuTentangKami.js"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Menum />
        <Menut />
        <Menuk />
        <Footer />
      </div>
    )
  }
}

export default App;