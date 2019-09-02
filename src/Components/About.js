import React from 'react';

import waffy from './Layouts/img/waffy-mascot.png';

class About extends React.Component {
  render() {
    return (
      <div id="about-section" className="row">
        <div className="col-xl-8 col-lg-8 col-md-9 col-sm-12 col-xs-12">
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
              <p className="blockquote mt-4 mr-5">
                Waffle Time started on September of 1998 in the province of Iloilo, Philippines as a simple business venture. The first outlet was in The Atrium Mall, Gen. Luna St., Iloilo City.
                With 7 profitable outlets, the owners were very optimist that the concept and brand is ready for expansion.
              </p>
              <p className="blockquote mt-3 mr-5">
                Waffle Time registered as a corporation, from being a single-proprietorship owned business, in May of 2002.
                It is also a registered name and trademark under the Intellectual Property Office of the Philippines.
              </p>
              <p className="blockquote mt-3 mr-5">
                On June 2002, Waffle Time started to penetrate the Metro Manila market. The concept was well received and became an instant hit. From
                then on, we opened area offices and outlets in Cebu, Cagayan De Oro and Davao regions.
              </p>
              <p className="blockquote mt-3 mr-5">
                Waffle Time opened its door to franchising on March 2004. With an established business system and a remarkable brand, Franchisees came in line to have their own franchised
                outlets that has brought exponential growth in the number of branches we have nationwide.
              </p>
              <p className="blockquote mt-3 mr-5 mb-5">
                Today, Waffle Time boasts of over 400 outlets nationwide and is still actively expanding into new regions and territories. Waffle Time is
                aiming, from being Ang Pambansang Waffle ng Pilipinas, to become the Best Waffles in the World!
              </p>

            </div>
            <div className="tab-pane fade ml-md-3" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
              <div className="blockquote mt-3 mr-5">
                <p className="mt-2 mr-5 font-weight-bold mb-2 blockquote font-weight-bold">
                  Mission
                  </p>
                <ul className="ml-2 list-unstyled blockquote">
                  <li className="mb-1">
                    To establish a strong "Waffle Time" brand image.
                      </li>
                  <li className="mb-1">
                    To develop a creative & assertive human resource.
                      </li>
                  <li className="mb-1">
                    To continuously re-invent waffle.
                      </li>
                  <li className="mb-1">
                    To delight customers.
                      </li>
                  <li className="">
                    To achive high level of efficiency.
                      </li>
                </ul>
                <p className="mt-2 mr-5 font-weight-bold mb-2 blockquote font-weight-bold">
                  Vision
                    </p>
                <p className="blockquote ml-2">
                  Serving the best waffles in the world across all races beyond all borders.
                    </p>
              </div>
            </div>
            <div className="tab-pane fade ml-md-3" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
              <p className="blockquote font-weight-bold">
                Entrepreneur Magazine
              </p>
              <ul className="list-unstyled blockquote ml-2">
                <li>
                  <i className="fas fa-star mr-2 mb-2"></i> 2008 - Most Promising Franchise
                </li>
                <li>
                  <i className="fas fa-star mr-2 mb-2"></i> 2008 - Fastest Growing Franchise
                </li>
                <li>
                  <i className="fas fa-star mr-2 mb-2"></i> 2008 - Best in Franchising Support
                </li>
                <li>
                  <i className="fas fa-star mr-2 mb-2"></i> 2007 - Best Local Homegrown Franchise
                </li>
              </ul>
              <p className="blockquote font-weight-bold">
                FranCorp Award Philippines
              </p>
              <ul className="list-unstyled blockquote ml-2">
                <li>
                  <i className="fas fa-star mr-2 mb-2"></i> 2017 - FranCorp One yo Many International Trailblazer
                </li>
                <li>
                  <i className="fas fa-star mr-2 mb-2"></i> 2012 - FranCorp Top 20 Award
                </li>
                <li>
                  <i className="fas fa-star mr-2 mb-2"></i> 2007 - FranCorp Award of Distinction
                </li>
              </ul>
              <p className="blockquote font-weight-bold">
                Department of Trade Industry & Philippine Franchise Association
              </p>
              <ul className="list-unstyled blockquote ml-2">
                <li>
                  <i className="fas fa-star mr-2 mb-2"></i> 2011 - Special Awards: Best CSR Ajuy Reforestation Project
                </li>
                <li>
                  <i className="fas fa-star mr-2 mb-2"></i> 2011 - Hall of Fame: Outstanding Filipino Franchise of the Year
                </li>
                <li>
                  <i className="fas fa-star mr-2 mb-2"></i> 2010 - Outstanding Filipino Franchise
                </li>
                <li>
                  <i className="fas fa-star mr-2 mb-2"></i> 2009 - Outstanding Filipino Franchise of the Year
                </li>
                <li>
                  <i className="fas fa-star mr-2 mb-2"></i> 2008 - Marketing Campaign of the Year (Finalist)
                </li>
                <li>
                  <i className="fas fa-star mr-2 mb-2"></i> 2008 - Outstanding Filipino Franchise 
                </li>
                <li>
                  <i className="fas fa-star mr-2 mb-2"></i> 2006 - Most Promising Filipino Franchise
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-3 col-sm-12 col-xs-12 text-center">
          <img className="img-fluid mt-5" src={waffy} />
        </div>
      </div> // end of about section
    ) 
  }
}

export default About;
