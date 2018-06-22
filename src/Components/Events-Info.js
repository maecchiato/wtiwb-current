import React from 'react';

import curve from './Layouts/img/curve.png';

import eventsmockup from './Layouts/img/events-mockup.png';

class Map extends React.Component{
  render(){
    return(
      <div id = "event-info-section" className = "row">
      <img id = "event-curve" src = {curve} className = "img-fluid img-vert"/>
      <div className = "col-xl-6 col-lg-6 col-md-6 col-xs-12 col-sm-12">
        <div className = "mt-5">
          <img src = {eventsmockup} className = "img-fluid" />
        </div>
      </div>
      <div className = "col-xl-6 col-lg-6 col-md-6 col-xs-12 col-sm-12">
      <h1 className = "text-md-right display-3 mt-5 text-white text-center">
        Hello World
      </h1>
      <p className = "h5 text-md-right mt-3 ml-md-5 mx-2 text-justify mb-4" id = "events-info-description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting, remaining essentially
        unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
        Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type specimen book. It has survived
        versions of Lorem Ipsum.
        </p>

        <span className = "float-right mr-md-3 mx-2">
          <span id = "vl-white"></span>
          <small className = "h6">
            Monday, 4 June 2018
           </small>


        </span>
      </div>

      </div>
    )
  }
}
export default Map;
