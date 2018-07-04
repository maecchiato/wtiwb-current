import React from 'react';

import waffleplate from './Layouts/img/waffle-plate.png';
import welcome from './Layouts/img/welcome.png';
import wafflebottom from './Layouts/img/waffle-home-bottom.png';
import cloud from './Layouts/img/cloud.png';

class Home extends React.Component{
  render(){
    return(
      <div id = "home-section" className = "row pb-xl-5">
          <img id = "waffle" alt = "waffle" className = "img-fluid d-none d-xl-inline d-lg-none float-right fixed-bottom" src = {waffleplate} />
          <img className = "img-fluid d-none d-xl-block" alt = "Waffles" id = "wafflebottom" src = {wafflebottom} />
          <div className = "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <img id = "welcome-waffletime" className = "img-fluid" src = {welcome} alt = "Welcome to Waffle Time!"/>
            <img id = "cloud3" alt = "Waffle Time Clouds" className = "cloud img-fluid ml-5 mt-35 d-none d-lg-block" src = {cloud} />
            <span className = "d-none d-lg-inline">
            <a id = "franchiseebtn" href = "#franchise-section" className = "btn btn-lg btn-primary mt-md-2 animate-bottom mt-md-5">BE A FRANCHISEE!</a>
            </span>
          </div>
          <div className = "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <img id = "cloud1" alt = "Waffle Time Clouds" className = "cloud img-fluid float-right mr-3" src = {cloud} />
            <img id = "cloud2" alt = "Waffle Time Clouds" className = "cloud img-fluid ml-5 mt-4" src = {cloud} />
            <img id = "cloud3" alt = "Waffle Time Clouds" className = "cloud img-fluid float-right pt-5 pb-5" src = {cloud} />
            <img id = "cloud4" alt = "Waffle Time Clouds" className = "cloud img-fluid float-right ml-5 pt-2 mt-5" src = {cloud} />
            <img className = "img-fluid d-lg-inline d-xl-none d-sm-inline d-xs-inline mt-0" src = {waffleplate} alt = "Waffle Time in Plate"/>

          </div>
      </div>
    )
  }
}


export default Home;
