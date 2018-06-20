import React from 'react';
import Slider from 'react-slick';

class Events extends React.Component{
  render(){
    var settings = {
      dots: true,
       centerMode: true,
       centerPadding: '60px',
       slidesToShow: 3,
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
        <div className = "col-xl-12 col-lg-12 col-md-12 col-xs-12 col-sm-12 text-center mb-5">
          <p className = "display-4 text-center"> EVERYTIME IS WAFFLE TIME!</p>
        </div>
        <div className = "col-xl-2 col-lg-2 col-md-2 col-xs-12 col-sm-12">
        </div>
        <div id = "event-slider" className = "col-xl-8 col-lg-8 col-md-8 col-xs-12 col-sm-12 text-center">
        <Slider {...settings}>
           <div>
             <img className = "img-fluid img-thumbnail " src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFJwrTzMfJylMplWL_L9ePRVXswBayg1CRm0oHBY2jC4NE3ae4" />
             <p className = "mt-3 h3 font-weight-bold">
                      Hello World
              </p>
             <p className = "mt-3 event-description text-justify mx-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris semper eu dui a faucibus consectetur adipiscing dolor
                sit amet, consectetur adipiscing.
             </p>
             <small className = "mt-2 text-muted float-right">
              Monday, 4 June 2018
             </small>
           </div>
           <div>
             <img className = "img-fluid img-thumbnail" src = "https://b.zmtcdn.com/data/pictures/chains/8/17815458/4dc2bb69366844cb90a2b53494daba81.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A" />
             <p className = "mt-3 h3 font-weight-bold">
                      Hello World
              </p>
             <p className = "mt-3 event-description text-justify mx-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris semper eu dui a faucibus consectetur adipiscing dolor
                sit amet, consectetur adipiscing.
             </p>
             <small className = "mt-2 text-muted float-right">
              Monday, 4 June 2018
             </small>
           </div>
           <div>
           <img className = "img-fluid img-thumbnail " src = "http://waffletime.com/img/products/products1.png" />
           <p className = "mt-3 h3 font-weight-bold">
                    Hello World
            </p>
           <p className = "mt-3 event-description text-justify mx-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris semper eu dui a faucibus consectetur adipiscing dolor
              sit amet, consectetur adipiscing.
           </p>
           <small className = "mt-2 text-muted float-right">
            Monday, 4 June 2018
           </small>
           </div>
           <div>
           <img className = "img-fluid img-thumbnail " src = "https://www.kanegosyo.com/assets/uploads/Waffle_Time.png" />
           <p className = "mt-3 h3 font-weight-bold">
                    Hello World
            </p>
           <p className = "mt-3 event-description text-justify mx-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris semper eu dui a faucibus consectetur adipiscing dolor
              sit amet, consectetur adipiscing.
           </p>
           <small className = "mt-2 text-muted float-right">
            Monday, 4 June 2018
           </small>
           </div>
           <div>
           <img className = "img-fluid img-thumbnail " src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjOToicgoANJ8glga6vgJP_q68a2s4v7mGnc7mraqRxGImoMd" />
           <p className = "mt-3 h3 font-weight-bold">
                    Hello World
            </p>
           <p className = "mt-3 event-description text-justify mx-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris semper eu dui a faucibus consectetur adipiscing dolor
              sit amet, consectetur adipiscing.
           </p>
           <small className = "mt-2 text-muted float-right">
            Monday, 4 June 2018
           </small>
           </div>
           <div>
           <img className = "img-fluid img-thumbnail " src = "http://www.waffletime.com/img/about/different%20fillin.png" />
           <p className = "mt-3 h3 font-weight-bold">
                    Hello World
            </p>
           <p className = "mt-3 event-description text-justify mx-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris semper eu dui a faucibus consectetur adipiscing dolor
              sit amet, consectetur adipiscing.
           </p>
           <small className = "mt-2 text-muted float-right">
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
