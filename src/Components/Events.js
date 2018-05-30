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
             < img className = "img-fluid img-thumbnail" src = "http://baijs.com/tinycarousel/examples/responsive/images/picture5.jpg" />
             <p className = "mt-3 h4">Hello World</p>
             <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper eu dui a faucibus.</small>
           </div>
           <div>
             <h3>2</h3>
           </div>
           <div>
             <h3>3</h3>
           </div>
           <div>
             <h3>4</h3>
           </div>
           <div>
             <h3>5</h3>
           </div>
           <div>
             <h3>6</h3>
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
