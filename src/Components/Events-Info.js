import React from 'react';

import curve from './Layouts/img/curve.png';

import eventsmockup from './Layouts/img/events-mockup.png';

class Map extends React.Component{
  render(){
    return(
      <div id = "event-info-section" className = "row">
      <img id = "event-curve" src = {curve} className = "img-fluid img-vert"/>
      <div className = "col-xl-8 col-lg-8 col-md-8 col-xs-12 col-sm-12">
        <div className = "mt-5">
          <img src = {eventsmockup} className = "img-fluid" />
        </div>
      </div>
      <div className = "col-xl-4 col-lg-4 col-md-4 col-xs-12 col-sm-12">
      <h1 className = "text-center display-3 mt-5 text-white">
        Hello World
      </h1>
      </div>
      </div>
    )
  }
}
export default Map;
