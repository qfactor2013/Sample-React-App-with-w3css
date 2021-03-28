import React, { Component } from 'react';

class Disqus extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.disqus_embed = this.disqus_embed.bind(this);
  }

  disqus_config = function () {
    this.page.url = 'qfactor.herokuapp.com';  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = 'qfactor'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
  };

  disqus_embed = function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://qfactor.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  };

  render() {

    this.disqus_embed();
    
    return (
      <div id="disqus_thread"></div>
    );
  }
}
export default Disqus;




                            