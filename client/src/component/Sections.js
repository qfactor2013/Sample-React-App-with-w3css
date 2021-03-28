import React, { Component, Fragment } from 'react';
import AboutSection from './AboutSection';
import PortfolioSection from './PortfolioSection';
import ContactSection from './ContactSection';

class Section extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
      </Fragment>
    );
  }
}
export default Section;
