import React from 'react';
import ReactDOM from 'react-dom'

import wavycurve from './Layouts/img/wavy-curve-red.png';
import wavycurveblue from './Layouts/img/wavy-curve-blue.png';

class Map extends React.Component{

  componentDidUpdate(){
    this.loadMap();
  }

  loadMap(){
    if(this.props && this.props.google)
    {
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      const MapConfig = Object.assign({}, {
          center: {lat: 10.7015003, lng: 122.5569132},
          zoom: 11,
          mapTypeId: 'roadMap'
      })

      this.map = new maps.Map(node, MapConfig);
    }
  }

  render(){

    const style = {
      width: '80vw',
      height: '75vh'
    }
    
    return(
      <div id = "map-section" className = "row">
      <img src = {wavycurve} className = "img-fluid wavycurve" alt = "Waffle blue curve"/>
        <span id = "expand-map">
          <div className = "col-xl-12 col-lg-12 col-md-12 col-xs-12 col-sm-12">
              <div ref="map" style={style}>

              loading map...
            </div>
          </div>

        </span>
      <img src = {wavycurveblue} className = "img-fluid wavy-curve" alt = "Waffle red curve" />
      </div>
    )
  }
}

export default Map;
