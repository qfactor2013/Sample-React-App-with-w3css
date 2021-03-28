import React from 'react';

const NavBar = () => (
  <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
    <img alt="" src="/w3images/avatar_smoke.jpg" style={{width:"100%"}} />
    <a href="#root" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
      <i className="fa fa-home w3-xxlarge" />
      <p>HOME</p>
    </a>
    <a href="#about" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
      <i className="fa fa-user w3-xxlarge" />
      <p>ABOUT</p>
    </a>
    <a href="#photos" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
      <i className="fa fa-eye w3-xxlarge" />
      <p>PHOTOS</p>
    </a>
    <a href="#contact" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
      <i className="fa fa-envelope w3-xxlarge" />
      <p>CONTACT</p>
    </a>
  </nav>
);
export default NavBar;
