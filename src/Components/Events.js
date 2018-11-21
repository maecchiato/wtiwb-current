import React from 'react';
import Slider from 'react-slick';

import events1 from './Layouts/img/advertisements/events1.jpg';
import events2 from './Layouts/img/advertisements/events2.jpg';
import events3 from './Layouts/img/advertisements/events3.jpg';
import events4 from './Layouts/img/flavor-of-the-month-display.jpg';
import events5 from './Layouts/img/advertisements/events5.jpg';
import events6 from './Layouts/img/advertisements/events6.jpg';

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
          <p className = "display-4 text-center">EVENTS AND ACTIVITIES</p>
        </div>
        <div className = "col-xl-2 col-lg-2 col-md-2 col-xs-12 col-sm-12">
        </div>
        <div id = "event-slider" className = "col-xl-8 col-lg-8 col-md-8 col-xs-12 col-sm-12 text-center">
        <Slider {...settings}>
          <div className = "zoom evt">
            <img className = "img-size" src = {events1} />
              <p className = "event-description">
                Waffy goes on a Natiownide Tour!
              </p>
              <p className = "mt-1 mx-1 event-description text-justify">

              </p>
              <small className = "mt-xl-5 mt-lg-2 mt-sm-0 mr-3 text-muted float-right event-description">
                Monday, 4 June 2018
              </small>
          </div>
          <div className = "zoom evt">
            <img className = "img-size" src = {events2} />
              <p className = "event-description">
                Waffle Time&apos;s Treat to the Best Mothers of the World!
              </p>
              <p className = "mt-1 mx-1 event-description text-justify">

              </p>
              <small className = "mt-xl-5 mt-lg-2 mt-sm-0 mr-3 text-muted float-right event-description">
                Monday, 4 June 2018
              </small>
          </div>
          <div className = "zoom evt">
            <img className = "img-size" src = {events3} />
              <p className = "event-description">
                Waffle Time launched the year-long celebration of its 20th Anniversary!
              </p>
              <p className = "mt-1 mx-1 event-description text-justify">

              </p>
              <small className = "mt-xl-5 mt-lg-2 mt-sm-0 mr-3 text-muted float-right event-description">
                Monday, 4 July 2018
              </small>
          </div>
          <div className = "zoom evt">
            <img className = "img-size" src = {events4} />
              <p className = "event-description">
                Fillings of the Month is here!
              </p>
              <p className = "mt-1 mx-1 event-description text-justify">

              </p>
              <small className = "mt-xl-5 mt-lg-2 mt-sm-0 mr-3 text-muted float-right event-description">
                Sunday, 1 July 2018
              </small>
          </div>
          <div className = "zoom evt">
            <img className = "img-size" src = {events5} />
              <p className = "event-description">
                 Waffle Time Joins PFA on Franchise Negosyo activities Nationwide!
              </p>
              <p className = "mt-1 mx-1 event-description text-justify">

              </p>
              <small className = "mt-xl-5 mt-lg-2 mt-sm-0 mr-3 text-muted float-right event-description">
                Sunday, 1 June 2018
              </small>
          </div>
          <div className = "zoom evt">
            <img className = "img-size" src = {events6} />
              <p className = "event-description">
                We honor Dads with Waffle-licious Gifts on Father&apos;s Day
              </p>
              <p className = "mt-1 mx-1 event-description text-justify">

              </p>
              <small className = "mt-xl-5 mt-lg-2 mt-sm-0 mr-3 text-muted float-right event-description">
                Sunday, 1 June 2018
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
