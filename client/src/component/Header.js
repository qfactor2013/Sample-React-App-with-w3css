import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <header className="w3-container w3-padding-32 w3-center w3-black" id="home">
        <h1 className="w3-jumbo">
          <span className="w3-hide-small">I&apos;m</span>
          John Doe.
        </h1>
        <p>Photographer and Web Designer.</p>
        <img
          src="/w3images/man_smoke.jpg"
          alt="boy"
          className="w3-image"
          width="992"
          height="1108"
        />
      </header>
    );
  }
}
export default Header;
