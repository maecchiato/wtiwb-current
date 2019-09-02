import React from 'react';
import Slider from 'react-slick';

import events1 from './Layouts/img/ads/events1.jpg';
import events2 from './Layouts/img/ads/events2.jpg';
import events3 from './Layouts/img/ads/DengueCollage.jpg';
import events4 from './Layouts/img/ads/MalasakitCollage.jpg';
import events5 from './Layouts/img/ads/flavor-of-the-month.jpg';
import events6 from './Layouts/img/ads/GalaCollage.jpg';


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
              WaffleTime now accepts GCash!
              </p>
              <p className = "mt-1 mx-1 event-description text-justify">

              </p>
              <small className = "mt-xl-5 mt-lg-2 mt-sm-0 mr-3 text-muted float-right event-description">
                Sunday, 1 September 2019
              </small>
          </div>
          <div className = "zoom evt">
            <img className = "img-size" src = {events2} />
              <p className = "event-description">
              Waffle Time Joins PFA on Franchise Negosyo activities Nationwide!
              </p>
              <p className = "mt-1 mx-1 event-description text-justify">

              </p>
              <small className = "mt-xl-5 mt-lg-2 mt-sm-0 mr-3 text-muted float-right event-description">
                Thursday, 22 August 2019
              </small>
          </div>
          <div className = "zoom evt">
            <img className = "img-size" src = {events3} />
              <p className = "event-description">
              Waffle Time Dugo para sa Dengue Bloodletting Drive in partnership with Red Cross Iloilo Chapter
              </p>
              <p className = "mt-1 mx-1 event-description text-justify">

              </p>
              <small className = "mt-xl-5 mt-lg-2 mt-sm-0 mr-3 text-muted float-right event-description">
                Thursday, 8 August 2019
              </small>
          </div>
          <div className = "zoom evt">
            <img className = "img-size" src = {events4} />
              <p className = "event-description">
               Waffle Time Foundation donates 20 folding beds for the "Malasakit sa Kapwa Project"
              </p>
              <p className = "mt-1 mx-1 event-description text-justify">

              </p>
              <small className = "mt-xl-5 mt-lg-2 mt-sm-0 mr-3 text-muted float-right event-description">
                Saturday, 3 August 2019
              </small>
          </div>
          <div className = "zoom evt">
            <img className = "img-size" src = {events5} />
              <p className = "event-description">
                 Fillings of the Month is here!
              </p>
              <p className = "mt-1 mx-1 event-description text-justify">

              </p>
              <small className = "mt-xl-5 mt-lg-2 mt-sm-0 mr-3 text-muted float-right event-description">
                Monday, 1 July 2019
              </small>
          </div>
          <div className = "zoom evt">
            <img className = "img-size" src = {events6} />
              <p className = "event-description">
                Waffle time celebrates it&apos;s 20th year Gala night with Franchisee awardees and the 61st of our well-loved yet low-key Ilonggo bizperson - Johnny Que
              </p>
              <p className = "mt-1 mx-1 event-description text-justify">

              </p>
              <small className = "mt-xl-5 mt-lg-2 mt-sm-0 mr-3 text-muted float-right event-description">
                Tuesday, 18 June 2019
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
