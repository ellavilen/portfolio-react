import React, { Component } from "react";
import Navbar from './Navbar';
import Header from './Header';
import Introduction from './Introduction';
import Experience from './Experience';
import Studies from './Studies';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
  return(
    <div>
      <Navbar/>
      <Header/>
      <Introduction id="introduction"/>
      <Experience id="experience"/>
      <Studies id="studies"/>
      <Footer id="connect"/>
      {/*create more components as you want with different ID*/}

    </div>
  );
}
}

export default App;