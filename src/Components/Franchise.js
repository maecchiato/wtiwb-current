import React from 'react';

import waffywalking from './Layouts/img/waffy-walking.png';
import imgfooter from './Layouts/img/footer.png';

class Map extends React.Component{
  render(){
    return(
      <div id = "franchise-section" className = "row justify-content-sm-center">
      <img id = "footer" src = {imgfooter} alt = "Green Grasses! WAOW" className = "img-fluid" />
        <div className = "col-xl-8 col-lg-8 col-md-8 col-xs-12 col-sm-12">
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
        <div className="row">
            <div className="col-md-3">
              <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                  Why Waffletime?
                </a>
                <a className="nav-link" id="v-pills-faq-tab" data-toggle="pill" href="#v-pills-faq" role="tab" aria-controls="v-pills-faq" aria-selected="false">
                  F.A.Q.
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
            <div className="col-md-8 pt-5 pt-md-0">
              <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                  <p className = "font-weight-bold mb-3">Why Waffletime?</p>
                  <p className = "">
                  Waffletime is a recognized brand or trademark that can guarantee you with success. I think it's great to be a part of a franchise that is successful. Any franchise is successful because it's a continuation and people have seen it. We want you to be completely satisfied with our services. We will do whatever it takes to make you happy. No hassles, no problems.
                  </p>
                </div>
                <div className="tab-pane fade" id="v-pills-faq" role="tabpanel" aria-labelledby="v-pills-profile-tab">

                <a href = "#" data-toggle="collapse" data-target="#FAQ1">
                  <div className="alert alert-primary" role="alert">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                  </div>
                </a>

                <div id="FAQ1" className="collapse">
                <p className = "small">
                  Praesent luctus efficitur lorem, in tincidunt magna convallis at. Curabitur in leo et elit gravida egestas. Phasellus eget risus efficitur, egestas mi ac.
                </p>
                </div>

                <a href = "#" data-toggle="collapse" data-target="#FAQ2">
                  <div className="alert alert-primary" role="alert">
                    Proin faucibus id arcu nec convallis. Nulla mauris ligula?
                  </div>
                </a>

                <div id="FAQ2" className="collapse">
                <p className = "small">
                  Praesent luctus efficitur lorem, in tincidunt magna convallis at. Curabitur in leo et elit gravida egestas. Phasellus eget risus efficitur, egestas mi ac.
                </p>
                </div>

                <a href = "#" data-toggle="collapse" data-target="#FAQ3">
                  <div className="alert alert-primary" role="alert">
                    Donec vitae turpis quis nulla varius semper. Phasellus ac nunc ut elit venenatis tincidunt?
                  </div>
                </a>

                <div id="FAQ3" className="collapse">
                <p className = "small">
                Praesent luctus efficitur lorem, in tincidunt magna convallis at. Curabitur in leo et elit gravida egestas. Phasellus eget risus efficitur, egestas mi ac.
                </p>
                </div>

                <a href = "#" data-toggle="collapse" data-target="#FAQ4">
                  <div className="alert alert-primary" role="alert">
                    Sed euismod, diam non commodo imperdiet, lorem ex?
                  </div>
                </a>

                <div id="FAQ4" className="collapse">
                  <p className = "small">
                  Praesent luctus efficitur lorem, in tincidunt magna convallis at. Curabitur in leo et elit gravida egestas. Phasellus eget risus efficitur, egestas mi ac.
                  </p>
                </div>

                </div>
                <div className="tab-pane fade" id="v-pills-contact" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                  <a href = "#" data-toggle="collapse" data-target="#MANILAOFFICE">
                    <div className="alert alert-primary" role="alert">
                        Manila Office
                    </div>
                  </a>

                  <div id="MANILAOFFICE" className="collapse">
                    <p className = "small">
                      <p className = "small mb-2">
                        <i className="fas fa-home mr-2"></i>
                        # 69 C, Raymundo Avenue Brgy Caniogan, Pasig City
                      </p>
                      <p className = "small mb-2">
                        <i className="fas fa-phone-square mr-2"></i>
                          (033) 335 - 00 - 26 | (632) 584 - 37 - 04 | (63)(2) 641 - 11 - 51
                      </p>
                      <p className = "small mb-2">
                        <i className="fas fa-mobile-alt mr-2"></i>
                          +63933851968
                      </p>
                      <p className = "small mb-2">
                        <i className="fas fa-fax mr-2"></i>
                        (632) 684 - 18 - 70
                      </p>
                    </p>
                  </div>

                  <a href = "#" data-toggle="collapse" data-target="#ILOILOOFFICE">
                    <div className="alert alert-primary" role="alert">
                        Iloilo Office
                    </div>
                  </a>

                  <div id="ILOILOOFFICE" className="collapse">
                    <p className = "small">
                      <p className = "small mb-2">
                        <i className="fas fa-home mr-2"></i>
                        Door 5, Q.H.P. Building, Arsenal St. Iloilo City, 5000, Philippines
                      </p>
                      <p className = "small mb-2">
                        <i className="fas fa-phone-square mr-2"></i>
                          (63) 335 - 09 - 35
                      </p>
                      <p className = "small mb-2">
                        <i className="fas fa-mobile-alt mr-2"></i>
                          +639338633846
                      </p>
                      <p className = "small mb-2">
                        <i className="fas fa-fax mr-2"></i>
                        (63) 335 - 00 - 26
                      </p>
                    </p>
                  </div>

                  <a href = "#" data-toggle="collapse" data-target="#CEBUOFFICE">
                    <div className="alert alert-primary" role="alert">
                        Cebu Office
                    </div>
                  </a>

                  <div id="CEBUOFFICE" className="collapse">
                    <p className = "small">
                      <p className = "small mb-2">
                        <i className="fas fa-home mr-2"></i>
                          338-8G Victor Village, Tres De Abril, Punta Princesa, Labangon, Cebu City
                      </p>
                      <p className = "small mb-2">
                        <i className="fas fa-phone-square mr-2"></i>
                          (032) 253 - 96 - 79 | (032) 417 - 45 - 48
                      </p>
                      <p className = "small mb-2">
                        <i className="fas fa-mobile-alt mr-2"></i>
                          +639429602214
                      </p>
                      <p className = "small mb-2">
                        <i className="fas fa-fax mr-2"></i>
                        (032) 253 - 96 - 79
                      </p>
                    </p>
                  </div>

                  <a href = "#" data-toggle="collapse" data-target="#CAGAYANDEOROOFFICE">
                    <div className="alert alert-primary" role="alert">
                        Cagayan De Oro Office
                    </div>
                  </a>

                  <div id="CAGAYANDEOROOFFICE" className="collapse">
                    <p className = "small">
                      <p className = "small mb-2">
                        <i className="fas fa-home mr-2"></i>
                        3699 Las Piedras Village, Capisnon, Kauswagan, Cagayan De Oro City
                      </p>
                      <p className = "small mb-2">
                        <i className="fas fa-phone-square mr-2"></i>
                          (088) 850 - 01 - 28
                      </p>
                      <p className = "small mb-2">
                        <i className="fas fa-mobile-alt mr-2"></i>
                          +639338514498
                      </p>
                    </p>
                  </div>
                  <a href = "#" data-toggle="collapse" data-target="#DAVAOOFFICE">
                    <div className="alert alert-primary" role="alert">
                        Davao Office
                    </div>
                  </a>

                  <div id="DAVAOOFFICE" className="collapse">
                    <p className = "small">
                      <p className = "small mb-2">
                        <i className="fas fa-home mr-2"></i>
                          #32B Mariner St., Dona Vincenta Village, Davao City
                      </p>
                      <p className = "small mb-2">
                        <i className="fas fa-phone-square mr-2"></i>
                          (082) 298 - 53 - 35
                      </p>
                      <p className = "small mb-2">
                        <i className="fas fa-mobile-alt mr-2"></i>
                          +639338513967
                      </p>
                    </p>
                  </div>
                </div>
                <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                  <p className = "font-weight-bold h4 mb-3">Interested?</p>
                  <p className = "p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus dui, lacinia eget mattis eu, vulputate sed neque. Sed mattis tincidunt nisi et volutpat.
                  </p>
                  <a href ="mailto:franchising@waffletime.com?Subject=Franchise%20Inquiry" className = "btn btn-success float-right mt-5 mb-3 mr-2" target = "_top">
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
