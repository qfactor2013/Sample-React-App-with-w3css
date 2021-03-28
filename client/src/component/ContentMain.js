import React, { Component } from 'react';

import Sections from './Sections';
import Header from './Header';
import Disqus from './Disqus';

class ContentMain extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="w3-padding-large" id="main">
        <Header />
        <Sections />
        <Disqus />
      </div>
    );
  }
}
export default ContentMain;
