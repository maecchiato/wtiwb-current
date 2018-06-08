import React from 'react';

import curve from './Layouts/img/curve.png';

class Map extends React.Component{
  render(){
    return(
      <div id = "event-info-section" className = "row">
      <img id = "event-curve" src = {curve} className = "img-fluid img-vert"/>
      <div className = "col-xl-12 col-lg-12 col-md-12 col-xs-12 col-sm-12">
        <h1 className = "text-center display-3 mt-5">
            Hello World
        </h1>
      </div>
      </div>
    )
  }
}
export default Map;
