import React from 'react';

import waffle from './Layouts/img/waffle.png';
import ourwaffles from './Layouts/img/our-waffle.png'
import curve from './Layouts/img/curve.png';

class waffles extends React.Component{
  render(){
    return(
      <div id = "waffles-section" className = "row justify-content-sm-center">
        <div className = "col-xl-6 col-lg-6 col-md-6 col-sm-auto col-xs-auto ">
        <img id = "waffles-waffle" src = {waffle} className = "img-fluid mt-lg-5 mt-xl-5 mb-3" />
        </div>
        <div className = "col-xl-6 col-lg-6 col-md-6 col-sm-12 mx-auto col-xs-12">
          <img src = {ourwaffles} className = "img-fluid" alt = "Our Waffle Story"/>
          <span id = "waffles-definition">
            <span className = "waffle-definition-box">
            <p id = "waffle-definition-title-1" className = "h5 mt-3">What Makes it Special?</p>
            </span>
              <p id = "waffle-definition-1" className = "add-box">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
              <p id = "waffle-definition-title-2" className = "h5">What Makes it Special?</p>
                <p id = "waffle-definition-2" className = "add-box">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
            </span>
        </div>
        <img id = "waffle-curve" src = {curve} className = "img-fluid"/>
      </div>
    )
  }
}

export default waffles;
