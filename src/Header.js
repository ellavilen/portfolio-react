import React, { Component } from "react";
import headerimage from "./pics/mountains-1412683.png"
 
class Header extends Component {
  render() {
    return (
        <div className="header">
          <img className="header-img" src={headerimage}></img>
          <div className="header-text" id="header-tex">
            <h1>Ella Vilen</h1>
            </div>
        </div>
    );
  }
}
 
export default Header;