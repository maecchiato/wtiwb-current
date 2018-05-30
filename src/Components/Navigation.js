import React from 'react';
import logo from './Layouts/img/logo.png';

class Navigation extends React.Component {
  render() {
    return (
      <nav id = "navbar-header" className = "navbar navbar-expand-lg navbar-light fixed-top">
        <a className = "navbar-brand" href = "/">
          <img id = "logo" src = {logo} alt = ""/>
        </a>
         <button className ="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className = "navbar-toggler-icon"></span>
        </button>
          <div className = "collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className = "navbar-nav ml-auto">
              <a className = "nav-item nav-link mr-md-2" href = "#waffles-section">OUR WAFFLE</a>
              <a className = "nav-item nav-link mr-md-2" href = "#about-section">ABOUT US</a>
              <a className = "nav-item nav-link mr-md-2" href = "#events-section">EVENTS</a>
              <a className = "nav-item nav-link mr-md-2" href = "#map-section">OUR STORES</a>
              <a className = "nav-item nav-link" href = "/">CONTACT US</a>
            </div>
        </div>
      </nav>
    )
  }
}

export default Navigation;
