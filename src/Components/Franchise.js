import React from 'react';

import waffywalking from './Layouts/img/waffy-walking.png';
import imgfooter from './Layouts/img/footer.png';

class Map extends React.Component{
  render(){
    return(
      <div id = "franchise-section" className = "row justify-content-sm-center">
        <div className = "col-xl-8 col-lg-8 col-md-8 col-xs-12 col-sm-12">
          
        </div>
        <div className = "col-xl-4 col-lg-4 col-md-4 col-xs-12 col-sm-12 mx-auto">
          <img src = {waffywalking} alt = "Walking Waffy" className = "img-fluid mt-5 ml-lg-0 ml-4 ml-md-0 ml-sm-5" />
          <p className = "h6 d-lg-none d-xl-none d-md-none d-sm-inline d-xs-inline mt-5  ml-md-0 ml-sm-5 text-center">Waffle Time Inc., © All Rights Reserved 2018</p>
        </div>
        <div className = "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding">
        <div id = "footer-main">
          <img id = "footer" src = {imgfooter} alt = "Green Grasses! WAOW" className = "img-fluid" />
        </div>
        </div>
      </div>
    )
  }
}

export default Map;
