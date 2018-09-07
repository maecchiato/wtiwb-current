import React from 'react';
import Youtube from '@u-wave/react-youtube';

import curve from './Layouts/img/curve.png';

import year20IMG from './Layouts/img/20-years.png';


class Map extends React.Component{
  _onReady(event){
    event.target.mute();
  }

  _onEnd(event){
    event.target.playVideo();
  }

  render(){
    return(
      <div id = "event-info-section" className = "row">
      <img id = "event-curve" src = {curve} className = "img-fluid img-vert"/>
      <div className = "col-xl-5 col-lg-5 col-md-5 col-xs-12 col-sm-12">
        <div className = "mt-5 youtube-parent h-100">
          <div className = "youtube-display pt-5 h-50 d-xl-block d-none">
            <Youtube
              video="q4r7Rkjjlgk"
              autoplay
              muted
              width = "100%"
              height = "100%"
              showInfo  = {false}
              controls = {false}
              allowFullscreen = {false}
              showRelatedVideos	= {false}
              annotations = {false}
              className="video-iframe"
              onReady={this._onReady}
              onEnd={this._onEnd}
            />
        </div>
          <img src = {year20IMG} className = "img-fluid d-xl-none d-block" />

        </div>
      </div>
      <div className = "col-xl-7 col-lg-7 col-md-7 col-xs-12 col-sm-12">
      <h1 className = "text-md-right display-4 mt-5 text-white text-center mb-4">
        20 Years Of Baking Freshness
      </h1>
      <p className = "h5 text-md-right mt-3 ml-md-5 mx-2 text-justify mb-4" id = "events-info-description">
        <p className = "mb-3">
          Waffle Time is celebrating its two decades of baking fresh waffles at site with a wide variety of fillings.
          What started as a simple kiosk in Iloilo City has already captured the heart of the Filipinos nationwide.
        </p>

        <p className = "mb-3">
          With its continued growth, Waffle Time has become the biggest brand of Waffles in Food Kiosk in the Philippines
          and is being recognized by the Philippine Franchise Association, DTI and other organizations for being the Best
          Brand in its category. Waffle Time has also represented the country in
          several business matching ang franchising shows all over the world.
        </p>

        <p className = "mb-3">
          Waffle Time boasts of over 400 outlets nationwide. This has brought tremendous job opportunities
          for the Filipinos and has helped families with a good workplace and admirable career growth paths.
        </p>

        <p className = "mb-3">
          In return, Waffle Time has also contributed to taking care of our nature with several tree planting
          activities, reforestation projects and other social activities throughout the years. Waffle Time and
          its people have already donated bloods to our partner hospitals including Red Cross which have also
          helped support and save lives.
        </p>

        <p className = "mb-3">
          With its partner companies, Waffles Time has also donated classrooms and established other projects
          that aims to develop the quality of education we provide in our community.
        </p>

        <p className = "mb-3">
          Indeed, Waffle Time has gone a long way and has touch many lives already with our freshly baked waffles being part of the Filipino snack favorites.
        </p>

        <p className = "mb-3 font-weight-bold">
          Cheers to more years of baking freshness!
        </p>
        </p>

        <span className = "float-right mr-md-3 mx-2">
          <span id = "vl-white"></span>
          <small className = "h6">
            Tuesday, 3 July 2018
           </small>


        </span>
      </div>

      </div>
    )
  }
}
export default Map;
