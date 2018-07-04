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
       defaultZoom={13}
       center={{lat: 10.7202, lng: 122.5621 }}
       defaultOptions={defaultMapOptions}
       >
       {props.isMarkerShown && (
         <Marker position={{ lat: 10.7537987, lng: 122.5378174 }} />
       )}
      {props.isMarkerShowns && (
         <Marker position={{ lat: 10.7538192, lng: 122.5394794}} />
       )}
       {props.MarkerShowns && (
         <Marker position={{ lat: 10.7520137, lng: 122.5379397 }} />
       )}
       {props.MarkerShowns && (
         <Marker position={{ lat: 10.7183068, lng: 122.5596691 }} />
       )}
       {props.MarkerShowns && (
         <Marker position={{ lat: 10.6979304, lng: 122.5680173}} />
       )}
       {props.MarkerShowns && (
         <Marker position={{ lat: 10.711603, lng: 122.5506618}} />
       )}
       {props.MarkerShowns && (
         <Marker position={{ lat: 10.6973053, lng: 122.5671713}} />
       )}
       {props.MarkerShowns && (
         <Marker position={{ lat: 10.70051, lng: 122.5654568}} />
       )}
       {props.MarkerShowns && (
         <Marker position={{ lat: 10.6947405, lng: 122.5472622}} />
       )}
       {props.MarkerShowns && (
         <Marker position={{ lat: 10.6964249, lng: 122.5636855}} />
       )}
       {props.MarkerShowns && (
         <Marker position={{ lat: 10.6970144, lng: 122.5669942}} />
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
