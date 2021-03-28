import React, { Component } from 'react';
// import logo from '../logo.svg';
import './common.css';
import NavBar from './nav';
import ContentMain from './ContentMain';
import Footer from './Footer';
class App extends Component {
  
  componentDidMount(){
    let navLinks = document.querySelectorAll('nav > a:not([href="#root"])');
    
    window.addEventListener('scroll', event => {
      let fromTop = window.scrollY;
      navLinks.forEach(link => {
        let section = document.querySelector(link.hash)
        if(section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop){
          link.classList.add("w3-black");
        }else{
          link.classList.remove("w3-black");
        }
      })

      if(fromTop > 100){
        document.querySelector('#moveTop').style.visibility = 'visible'
      }else{
        document.querySelector('#moveTop').style.visibility = 'hidden'
      }
    })
  }
  
  render() {
    return ( 
      <div className="App">
        <NavBar />
        <ContentMain />
        <Footer />
        <a href="#home" id="moveTop" className="w3-button w3-circle w3-white"><i className="fa fa-chevron-up w3-xlarge"/></a>
      </div>
    )}
};

export default App;
