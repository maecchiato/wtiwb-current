import React from 'react';

import waffywalking from './Layouts/img/waffy-walking.png';
import imgfooter from './Layouts/img/footer.png';

class Map extends React.Component{
  render(){
    return(
      <div id = "franchise-section" className = "row justify-content-sm-center">
      <img id = "footer" src = {imgfooter} alt = "Green Grasses! WAOW" className = "img-fluid" />
      <span id = "social-media" className = "d-none d-md-block">
        <span id = "social-media-display" className = "float-right mt-2">
          <p className = "h5 mb-0">Stay Connected</p>
          <span id = "social-media-icons" className = "float-right">
            <a href = "https://www.facebook.com/WaffleTimeInc/">
              <i className="fab fa-facebook-square mr-2"></i>
            </a>
            <a href = "https://twitter.com/waffletime_ph?lang=en">
              <i className="fab fa-twitter-square mr-2"></i>
            </a>
            <a href = "https://www.instagram.com/waffletime_ph/">
              <i className="fab fa-instagram"></i>
            </a>
          </span>
        </span>
      </span>
        <div className = "col-xl-8 col-lg-8 col-md-8 col-xs-12 col-sm-12">
        <div className="row">
            <div className="col-md-4">
              <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                  Why Waffle Time?
                </a>
                <a className="nav-link" id="v-pills-faq-tab" data-toggle="pill" href="#v-pills-faq" role="tab" aria-controls="v-pills-faq" aria-selected="false">
                  FAQ
                </a>
                <a className="nav-link" id="v-pills-contact-tab" data-toggle="pill" href="#v-pills-contact" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                  Contact Us!
                </a>
                <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                  Inquire Now!
                </a>
              </div>
            </div>
            <div className = "col-md-1">
              <div id = "vl-yellow" className = "d-none d-md-block"></div>
            </div>
            <div className="col-md-7 pt-5 pt-md-0">
              <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                  <p className = "font-weight-bold mb-3">Why Waffle Time?</p>
                  <p className = "">
                  Waffle Time is a recognized brand or trademark that can guarantee you with success. I think it's great to be a part of a franchise that is successful. Any franchise is successful because it's a continuation and people have seen it. We want you to be completely satisfied with our services. We will do whatever it takes to make you happy. No hassles, no problems.
                  </p>
                </div>

                <div className="tab-pane fade" id="v-pills-faq" role="tabpanel" aria-labelledby="v-pills-profile-tab">

                <a href = "/" data-toggle="collapse" data-target="#FAQ1">
                  <div className="alert alert-primary" role="alert">
                    Q: How much is the total cost of the Franchise Package?
                  </div>
                </a>

                <div id="FAQ1" className="collapse">
                <p className = "small">
                  A: Total Franchise Package is Php 250,000
                </p>
                </div>

                <a href = "/" data-toggle="collapse" data-target="#FAQ2">
                  <div className="alert alert-primary" role="alert">
                    Q: What comes with the package?
                  </div>
                </a>

                <div id="FAQ2" className="collapse">
                <p className = "small">
                  A: The Franchise package includes the following:
                  <ul>
                    <li>
                      Franchise fee
                    </li>
                    <li>
                      Cart and Equipment
                    </li>
                    <li>
                      Trainings, orientation and crew uniforms
                    </li>
                  </ul>
                </p>
                </div>

                <a href = "/" data-toggle="collapse" data-target="#FAQ3">
                  <div className="alert alert-primary" role="alert">
                    Q: Does Waffle Time require any Security Deposit
                  </div>
                </a>

                <div id="FAQ3" className="collapse">
                <p className = "small">
                  A: Waffle Time requires a Php 50,000 security deposit which should be paid before actual opening
                </p>
                </div>

                <a href = "/" data-toggle="collapse" data-target="#FAQ4">
                  <div className="alert alert-primary" role="alert">
                    Q: Does Waffle Time provide manpower?
                  </div>
                </a>

                <div id="FAQ4" className="collapse">
                  <p className = "small">
                    A: The Franchisee will be the one to hire their personnel. However, Waffle Time will screen and train them at no cost.
                  </p>
                </div>

                <a href = "/" data-toggle="collapse" data-target="#FAQ5">
                  <div className="alert alert-primary" role="alert">
                    Q: Is there any Royalty Fee?
                  </div>
                </a>

                <div id="FAQ5" className="collapse">
                  <p className = "small">
                    A: There is no Royalty Fee
                  </p>
                </div>

                <a href = "/" data-toggle="collapse" data-target="#FAQ6">
                  <div className="alert alert-primary" role="alert">
                    Q: What is the minimum space requirement?
                  </div>
                </a>

                <div id="FAQ6" className="collapse">
                  <p className = "small">
                    A: Minimum space requirement is 2m x 2m or 4 square meters.
                  </p>
                </div>

                <a href = "/" data-toggle="collapse" data-target="#FAQ7">
                  <div className="alert alert-primary" role="alert">
                    Q: When is the expected ROI?
                  </div>
                </a>

                <div id="FAQ7" className="collapse">
                  <p className = "small">
                    A: On the average, ROI is around 6 to 12 months. It will depend on the sales performance and the operation cost of the outlet.
                  </p>
                </div>

                <a href = "/" data-toggle="collapse" data-target="#FAQ8">
                  <div className="alert alert-primary" role="alert">
                    Q: Does Waffle Time provide the location?
                  </div>
                </a>

                <div id="FAQ8" className="collapse">
                  <p className = "small">
                    A: The franchisee will be the one to look for their own location and at the same time the franchise applicant will be oriented on how to evaluate their perspective proposed locations.
                  </p>
                </div>

                </div>
                <div className="tab-pane fade" id="v-pills-contact" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                  <a href = "/" data-toggle="collapse" data-target="#MANILAOFFICE">
                    <div className="alert alert-primary" role="alert">
                        Manila Office
                    </div>
                  </a>

                  <div id="MANILAOFFICE" className="collapse">
                    <p className = "h6">
                      <p className = "h6 mb-2 font-weight-light">
                        <i className="fas fa-home mr-2"></i>
                        #69 C. Raymundo Ave., Brgy. Caniogan, Pasig City, Philippines 1606
                      </p>
                      <p className = "h6 mb-2 font-weight-light">
                        <i className="fas fa-phone-square mr-2"></i>
                          (632) 584 - 1601 | (632) 584 - 3704
                      </p>
                      <p className = "h6 mb-2 font-weight-light">
                        <i className="fas fa-mobile-alt mr-2"></i>
                          +639338513968
                      </p>
                      <p className = "h6 mb-4 font-weight-light">
                        <i className="fas fa-fax mr-2"></i>
                        (632) - 642 - 1870
                      </p>
                    </p>
                  </div>

                  <a href = "/" data-toggle="collapse" data-target="#ILOILOOFFICE">
                    <div className="alert alert-primary" role="alert">
                        Iloilo Office
                    </div>
                  </a>

                  <div id="ILOILOOFFICE" className="collapse">
                    <p className = "h6 font-weight-light">
                      <p className = "mb-2">
                        <i className="fas fa-home mr-2"></i>
                          Door 5, Q.H.P Bdlg., Arsenal St., Iloilo City, Philippines 5000
                      </p>
                      <p className = "mb-2">
                        <i className="fas fa-phone-square mr-2"></i>
                          (6333) - 335 - 0935
                      </p>
                      <p className = "mb-2">
                        <i className="fas fa-mobile-alt mr-2"></i>
                          +639338633846
                      </p>
                      <p className = "mb-4">
                        <i className="fas fa-fax mr-2"></i>
                        (6333) - 335 - 0026
                      </p>
                    </p>
                  </div>

                  <a href = "/" data-toggle="collapse" data-target="#CEBUOFFICE">
                    <div className="alert alert-primary" role="alert">
                        Cebu Office
                    </div>
                  </a>

                  <div id="CEBUOFFICE" className="collapse">
                    <p className = "h6 font-weight-light">
                      <p className = "mb-2">
                        <i className="fas fa-home mr-2"></i>
                          338-8G Victor Village, Tres De Abril, Punta Princesa, Labangon, Cebu City, Philippines 6000
                      </p>
                      <p className = "mb-2">
                        <i className="fas fa-phone-square mr-2"></i>
                          (6332) - 253 - 9679 | (6332) - 417 - 4548
                      </p>
                      <p className = "mb-2">
                        <i className="fas fa-mobile-alt mr-2"></i>
                          +639338117037
                      </p>
                      <p className = "mb-4">
                        <i className="fas fa-fax mr-2"></i>
                          (6332) - 253 - 9679
                      </p>
                    </p>
                  </div>

                  <a href = "/" data-toggle="collapse" data-target="#CAGAYANDEOROOFFICE">
                    <div className="alert alert-primary" role="alert">
                        Cagayan De Oro Office
                    </div>
                  </a>

                  <div id="CAGAYANDEOROOFFICE" className="collapse">
                    <p className = "h6 font-weight-light">
                      <p className = "mb-2">
                        <i className="fas fa-home mr-2"></i>
                          3699 Las Piedras Village, Capisnon, Kauswagan, Cagayan De Oro City, Philippines 9000
                      </p>
                      <p className = "mb-2">
                        <i className="fas fa-phone-square mr-2"></i>
                          (6388) - 850 - 0218
                      </p>
                      <p className = "mb-4">
                        <i className="fas fa-mobile-alt mr-2"></i>
                          +639338514498
                      </p>
                    </p>
                  </div>
                  <a href = "/" data-toggle="collapse" data-target="#DAVAOOFFICE">
                    <div className="alert alert-primary" role="alert">
                        Davao Office
                    </div>
                  </a>

                  <div id="DAVAOOFFICE" className="collapse">
                    <p className = "h6 font-weight-light">
                      <p className = "mb-2">
                        <i className="fas fa-home mr-2"></i>
                          #32B Mariner St., Doña Vicenta Village, Davao City, Philippines 8000
                      </p>
                      <p className = "mb-2">``
                        <i className="fas fa-phone-square mr-2"></i>
                          (6382) - 298 - 5335
                      </p>
                      <p className = "mb-4">
                        <i className="fas fa-mobile-alt mr-2"></i>
                          +639338513967
                      </p>
                    </p>
                  </div>
                </div>
                <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                  <p className = "font-weight-bold h4 mb-3">Interested?</p>
                  <p className = "p">
                    Join our growing Waffle Time family today! Franchise now!
                  </p>
                  <a href ="mailto:customerservice@waffletime.com?Subject=Franchise%20Inquiry" className = "btn btn-success float-right mt-5 mb-3 mr-2" target = "_top">
                    Send us an Email
                  </a>
                </div>
              </div>
            </div>
          </div>
          <span id = "social-media" className = "d-block d-md-none">
            <span id = "social-media-display " className = "float-right mt-2">
              <p className = "h5 mb-0">Stay Connected</p>
              <span id = "social-media-icons" className = "float-right">
                <a href = "https://www.facebook.com/WaffleTimeInc/">
                  <i className="fab fa-facebook-square mr-2"></i>
                </a>
                <a href = "https://twitter.com/waffletime_ph?lang=en">
                  <i className="fab fa-twitter-square mr-2"></i>
                </a>
                <a href = "https://www.instagram.com/waffletime_ph/">
                  <i className="fab fa-instagram"></i>
                </a>
              </span>
            </span>
          </span>
        </div>
        <div className = "col-xl-4 col-lg-4 col-md-4 col-xs-12 col-sm-12 mx-auto" id = "footer-img">
          <img src = {waffywalking} alt = "Walking Waffy" className = "img-fluid mt-5 ml-lg-0 ml-4 ml-md-0 ml-sm-5" />
        </div>
        <div className = "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">

        </div>
      </div>
    )
  }
}

export default Map;
