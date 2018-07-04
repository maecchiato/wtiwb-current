import React from 'react';

import waffy from './Layouts/img/waffle3.jpg'

class About extends React.Component{
  render(){
    return(
      <div id = "about-section" className = "row">
        <div className = "col-xl-8 col-lg-8 col-md-9 col-sm-12 col-xs-12">
        <ul className="about-info nav mb-3 ml-lg-5 ml-2" id="pills-tab" role="tablist">
          <div className="vl"></div>
            <li className="nav-item">
              <a className="nav-link pl-3 pl-md-3 active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">OUR HISTORY</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">MISSION AND VISION</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">AWARDS & ACHIEVEMENTS</a>
            </li>
            </ul>

            <div className="tab-content mb-3 ml-lg-5 ml-2" id="pills-tabContent">
            <div className="tab-pane fade show active ml-md-3" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
              <p className = "blockquote mt-3 mr-5">
                Waffle Time started on September of 1998 in the province of
                Iloilo, Philippines as a simple business venture.
              </p>
              <p className = "blockquote mt-3 mr-5">
                The first outlet was in The Atrium Mall, Gen. Luna St., Iloilo City.
                On June 2002, Waffle Time started to penetrate the Metro Manila market.
                After which, we opened outlets in Cebu, Cagayan De Oro and Davao.
              </p>
              <p className = "blockquote mt-3 mr-5 mb-5">
                Waffle Time opened its door to franchising on March 2004. After then Waffle
                Time Outlets mushroomed all over the Philippine Islands. This proves on our
                popularity and acceptance by our customers of all ages. And we&apos;ll still
                be opening more outlets as we continue to deliver delicious, nutritious and
                reasonably-priced waffles to everyone.
              </p>

            </div>
            <div className="tab-pane fade ml-md-3" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
              <div className = "blockquote mt-3 mr-5">
                  <p className = "mt-2 mr-5 font-weight-bold mb-2 blockquote font-weight-bold">
                    Mission
                  </p>
                    <ul className = "ml-2 list-unstyled blockquote">
                      <li className = "mb-1">
                        To establish a strong "Waffle Time" brand image.
                      </li>
                      <li className = "mb-1">
                        To develop a creative & assertive human resource.
                      </li>
                      <li className = "mb-1">
                        To continuously re-invent waffle.
                      </li>
                      <li className = "mb-1">
                          To delight customers.
                      </li>
                      <li className = "">
                          To achive high level of efficiency.
                      </li>
                    </ul>
                    <p className = "mt-2 mr-5 font-weight-bold mb-2 blockquote font-weight-bold">
                      Vission
                    </p>
                    <p className = "blockquote ml-2">
                      Serving the best waffles in the world across all races beyond all borders.
                    </p>
              </div>
            </div>
            <div className="tab-pane fade ml-md-3" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
              <p className = "blockquote font-weight-bold">
                Entrepreneur Philippines Franchise Awards
              </p>
              <ul className = "list-unstyled blockquote ml-2">
                <li>
                    <i className="fas fa-star mr-2 mb-2"></i> Most Promising Franchise
                </li>
                <li>
                    <i className="fas fa-star mr-2 mb-2"></i> Fastest Growing Franchise
                </li>
                <li>
                    <i className="fas fa-star mr-2 mb-2"></i> Best in Franchising Support
                </li>
                <li>
                    <i className="fas fa-star mr-2 mb-2"></i> Best Local Homegrown Franchise
                </li>
                <li>
                    <i className="fas fa-star mr-2 mb-2"></i> Hall of Fame
                </li>
              </ul>
              <p className = "blockquote font-weight-bold">
                Department of Trade Industry & Philippine Franchise Association
              </p>
              <ul className = "list-unstyled blockquote ml-2">
                <li>
                    <i className="fas fa-star mr-2 mb-2"></i> Outstanding Filipino Franchise of the Year
                </li>
                <li>
                    <i className="fas fa-star mr-2 mb-2"></i> Hall of Fame Outstanding Filipino Franchise of the Year
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className = "col-xl-4 col-lg-4 col-md-3 col-sm-12 col-xs-12 text-center">
          <img className = "img-fluid mt-5" src = {waffy} />
        </div>
      </div>
    )
  }
}

export default About;
