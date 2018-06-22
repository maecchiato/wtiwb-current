import React from 'react';
import Slider from 'react-slick';

import waffle1 from './Layouts/img/waffle1.jpg';
import waffle2 from './Layouts/img/waffle2.png';
import waffle3 from './Layouts/img/waffle3.jpg';
import waffle4 from './Layouts/img/waffle4.png';
import waffle5 from './Layouts/img/waffle5.png';
import waffle6 from './Layouts/img/waffle6.png';
import waffle7 from './Layouts/img/waffle7.jpg';

class Events extends React.Component{
  render(){
    var settings = {
      dots: true,
       centerMode: true,
       centerPadding: '60px',
       slidesToShow: 3,
       speed: 1000,
       autoplay: true,
       autoplaySpeed: 4500,
       responsive: [
         {
           breakpoint: 768,
           settings: {
             arrows: false,
             centerMode: true,
             centerPadding: '40px',
             slidesToShow: 3
           }
         },
         {
           breakpoint: 480,
           settings: {
             arrows: false,
             centerMode: true,
             centerPadding: '40px',
             slidesToShow: 1
           }
         }
       ]
    };

    return(
      <div id = "events-section" className = "row">
        <div className = "col-xl-12 col-lg-12 col-md-12 col-xs-12 col-sm-12 text-center mb-1">
          <p className = "display-4 text-center"> EVERYTIME IS WAFFLE TIME!</p>
        </div>
        <div className = "col-xl-2 col-lg-2 col-md-2 col-xs-12 col-sm-12">
        </div>
        <div id = "event-slider" className = "col-xl-8 col-lg-8 col-md-8 col-xs-12 col-sm-12 text-center">
        <Slider {...settings}>
          <div className = "zoom evt">
            <img className = "img-size" src = {waffle1} />
              <p className = "event-description">
                Hello world
              </p>
              <p className = "mt-1 mx-1 event-description text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris semper eu dui a faucibus consectetur adipiscing dolor
                sit amet, consectetur adipiscing.
              </p>
              <small className = "mt-xl-5 mt-lg-2 mt-sm-0 mr-3 text-muted float-right event-description">
                Monday, 4 June 2018
              </small>
          </div>
          <div className = "zoom evt">
            <img className = "img-size" src = {waffle2} />
              <p className = "event-description">
                Hello world
              </p>
              <p className = "mt-1 mx-1 event-description text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris semper eu dui a faucibus consectetur adipiscing dolor
                sit amet, consectetur adipiscing.
              </p>
              <small className = "mt-xl-5 mt-lg-2 mt-sm-0 mr-3 text-muted float-right event-description">
                Monday, 4 June 2018
              </small>
          </div>
          <div className = "zoom evt">
            <img className = "img-size" src = {waffle3} />
              <p className = "event-description">
                Hello world
              </p>
              <p className = "mt-1 mx-1 event-description text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris semper eu dui a faucibus consectetur adipiscing dolor
                sit amet, consectetur adipiscing.
              </p>
              <small className = "mt-xl-5 mt-lg-2 mt-sm-0 mr-3 text-muted float-right event-description">
                Monday, 4 June 2018
              </small>
          </div>
          <div className = "zoom evt">
            <img className = "img-size" src = {waffle4} />
              <p className = "event-description">
                Hello world
              </p>
              <p className = "mt-1 mx-1 event-description text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris semper eu dui a faucibus consectetur adipiscing dolor
                sit amet, consectetur adipiscing.
              </p>
              <small className = "mt-xl-5 mt-lg-2 mt-sm-0 mr-3 text-muted float-right event-description">
                Monday, 4 June 2018
              </small>
          </div>
          <div className = "zoom evt">
            <img className = "img-size" src = {waffle5} />
              <p className = "event-description">
                Hello world
              </p>
              <p className = "mt-1 mx-1 event-description text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris semper eu dui a faucibus consectetur adipiscing dolor
                sit amet, consectetur adipiscing.
              </p>
              <small className = "mt-xl-5 mt-lg-2 mt-sm-0 mr-3 text-muted float-right event-description">
                Monday, 4 June 2018
              </small>
          </div>
          <div className = "zoom evt">
            <img className = "img-size" src = {waffle6} />
              <p className = "event-description">
                Hello world
              </p>
              <p className = "mt-1 mx-1 event-description text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris semper eu dui a faucibus consectetur adipiscing dolor
                sit amet, consectetur adipiscing.
              </p>
              <small className = "mt-xl-5 mt-lg-2 mt-sm-0 mr-3 text-muted float-right event-description">
                Monday, 4 June 2018
              </small>
          </div>
          <div className = "zoom evt">
            <img className = "img-size" src = {waffle7} />
              <p className = "event-description">
                Hello world
              </p>
              <p className = "mt-1 mx-1 event-description text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris semper eu dui a faucibus consectetur adipiscing dolor
                sit amet, consectetur adipiscing.
              </p>
              <small className = "mt-xl-5 mt-lg-2 mt-sm-0 mr-3 text-muted float-right event-description">
                Monday, 4 June 2018
              </small>
          </div>
         </Slider>
        </div>
        <div className = "col-xl-2 col-lg-2 col-md-2 col-xs-12 col-sm12">
        </div>
      </div>
    )
  }
}

export default Events;
