import React from 'react';
import ReactDOM from 'react-dom'

import wavycurve from './Layouts/img/wavy-curve-red.png';
import wavycurveblue from './Layouts/img/wavy-curve-blue.png';
import SearchBox from 'react-google-maps/lib/components/places/SearchBox';

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  google
} from "react-google-maps";


class Maps extends React.Component{

  render(){

 const _ = require("lodash");
 const { compose, withProps, lifecycle } = require("recompose");

 const defaultMapOptions = {
    disableDefaultUI: true,
  };

  const handleToggle = () => {
	this.setState({
		isOpen: !false
	});
  }

const MapWithASearchBox = compose(
 withProps({
   googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAJbpjI8KS7fzlHYDjIBeOL8TkPfEhXUSk&v=3.exp&libraries=geometry,drawing,places",
   loadingElement: <div style = {{ height: `90vh` }} />,
   containerElement: <div style = {{ height: `90vh` }} />,
   mapElement: <div style = {{ height: `90vh` }} />,
 }),
 lifecycle({
   componentWillMount() {
     const refs = {}

     this.setState({
       bounds: null,
       center: {
         lat: 41.9, lng: -87.624
       },
       markers: [],
       onMapMounted: ref => {
         refs.map = ref;
       },

       onBoundsChanged: () => {
         this.setState({
           bounds: refs.map.getBounds(),
           center: refs.map.getCenter(),
         })
       },
       onSearchBoxMounted: ref => {
         refs.searchBox = ref;
       },
       onPlacesChanged: () => {
         const places = refs.searchBox.getPlaces();
         const bounds = new google.maps.LatLngBounds();

         places.forEach(place => {
           if (place.geometry.viewport) {
             bounds.union(place.geometry.viewport)
           } else {
             bounds.extend(place.geometry.location)
           }
         });
         const nextMarkers = places.map(place => ({
           position: place.geometry.location,
         }));
         const nextCenter = _.get(nextMarkers, '0.position', this.state.center);

         this.setState({
           center: nextCenter,
           markers: nextMarkers,

         });

           },
         })
       },
     }),
     withScriptjs,
     withGoogleMap
    )(props =>
     <GoogleMap
       ref={props.onMapMounted}
       defaultZoom={14}
       center={{lat: 10.7202, lng: 122.5621 }}
       defaultOptions={defaultMapOptions}
       >
       {props.isMarkerShown && (
         <Marker position={{ lat: 10.7202, lng: 122.5621 }} />
       )}
      {props.isMarkerShowns && (
         <Marker position={{ lat: 10.7244, lng: 122.5573}} />
       )}
       {props.MarkerShowns && (
         <Marker position={{ lat: 10.7146, lng: 122.5516 }} />

       )}
       {props.MarkerShowns && (
         <Marker position={{ lat: 10.7259356, lng: 122.55376 }} />
       )}

     </GoogleMap>
    );
    return(
      <div id = "map-section" className = "row">
          <div className = "col-xl-12 col-lg-12 col-md-12 col-xs-12 col-sm-12 px-0">
          <img src = {wavycurve} className = "img-fluid wavycurve map-wavycurve-top" alt = "Waffle blue curve"/>
          <div ref="map"  className = "" id = "map-size"   >
               <MapWithASearchBox isMarkerShowns isMarkerShown MarkerShowns/>
          </div>
          <img src = {wavycurveblue} className = "img-fluid wavy-curve map-wavycurve-bottom" alt = "Waffle red curve" />
          </div>


      </div>
    )
  }
}

export default Maps;
