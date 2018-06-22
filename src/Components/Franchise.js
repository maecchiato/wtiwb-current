import React from 'react';

import waffywalking from './Layouts/img/waffy-walking.png';
import imgfooter from './Layouts/img/footer.png';

class Map extends React.Component{
  render(){
    return(
      <div id = "franchise-section" className = "row justify-content-sm-center">
      <img id = "footer" src = {imgfooter} alt = "Green Grasses! WAOW" className = "img-fluid" />
        <div className = "col-xl-8 col-lg-8 col-md-8 col-xs-12 col-sm-12">
        <div className="row">
            <div className="col-md-3">
              <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                  Why Waffletime?
                </a>
                <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                  20 Years and counting
                </a>
                <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                  Awards and Achievments
                </a>
                <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                  Inquire Now!
                </a>
              </div>
            </div>
            <div className = "col-md-1">
              <div id = "vl-yellow" className = "d-none d-md-block"></div>
            </div>
            <div className="col-md-8 pt-5 pt-md-0">
              <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                  <p className = "font-weight-bold mb-3">Why Waffletime?</p>
                  <p className = "">
                  Waffletime is a recognized brand or trademark that can guarantee you with success. I think it's great to be a part of a franchise that is successful. Any franchise is successful because it's a continuation and people have seen it. We want you to be completely satisfied with our services. We will do whatever it takes to make you happy. No hassles, no problems.
                  </p>
                </div>
                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                <p className = "font-weight-bold mb-3">20 Years of Waffle</p>
                <p className = "">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim neque, lacinia id ex non, molestie elementum nisl. Sed et dapibus ante, ultrices faucibus enim. Duis euismod mauris nisl, a ultrices nisi gravida ut. Cras lectus dolor, vestibulum non sem quis,
                    imperdiet volutpat enim. Cras placerat nisl sed aliquet vulputate. Phasellus id arcu turpis.
                  Nulla tincidunt vel nisi sed congue. Pellentesque vulputate ipsum vitae nisi varius, quis auctor augue scelerisque. In blandit dolor leo, vel convallis enim maximus ac. Etiam ut enim non nisi sollicitudin suscipit at sit amet velit. Duis id consectetur leo,
                  sit amet pulvinar sapien. Maecenas maximus sollicitudin nulla,
                </p>

                </div>
                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
                <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                  <p className = "font-weight-bold h4 mb-3">Interested?</p>
                  <a href ="mailto:franchising@waffletime.com?Subject=Franchise%20Inquiry" className = "btn btn-success float-right mt-5 mr-2" target = "_top">
                    Send us an Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className = "col-xl-4 col-lg-4 col-md-4 col-xs-12 col-sm-12 mx-auto">
          <img src = {waffywalking} alt = "Walking Waffy" className = "img-fluid mt-5 ml-lg-0 ml-4 ml-md-0 ml-sm-5" />
        </div>
        <div className = "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
        </div>
      </div>
    )
  }
}

export default Map;
