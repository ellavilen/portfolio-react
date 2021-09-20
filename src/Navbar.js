import React, { Component } from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';

export default class Navbar extends Component {
    scrollToTop =()=> {
        scroll.scrollToTop();
    };
    render(){
    return (
        <div className="nav" id="navbar">
            <div className="nav-content">
            <p className="nav-name" onClick={this.scrollToTop}>Ella Vilen</p>
            <ul className="nav-items">
                <li className="nav-item">
                    <Link
                    activeClass="active"
                    to="introduction"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                        Introduction
                    </Link>
                </li>
                <li className="nav-item">
                <Link
                    activeClass="active"
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                        Experience
                    </Link>
                </li>
                <li className="nav-item">
                <Link
                    activeClass="active"
                    to="studies"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                        Studies
                    </Link>
                </li>
                <li className="nav-item">
                <Link
                    activeClass="active"
                    to="footer"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                        Connect
                    </Link>
                </li>
            </ul>
            </div>
        </div>
    );
}
}
