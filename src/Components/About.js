import React from 'react';

import waffy from './Layouts/img/waffy.png'

class About extends React.Component{
  render(){
    return(
      <div id = "about-section" className = "row">
        <div className = "col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12">
          <ul className = "about-info list-inline ml-lg-5 ml-xl-5">
            <li className = "list-inline-item">
              <a href = "/" className = "h4 ml-2">> Our History</a>
            </li>
            <li className = "list-inline-item">
              <a href = "/" className = "h4 ml-2">> Mission and Vision</a>
            </li>
            <li className = "list-inline-item">
              <a href = "/" className = "h4 ml-2">> Be One of Us!</a>
            </li>
          </ul>
          <p className = "blockquote ml-5 mt-5 mr-5">
            Waffle Time started on September of 1998 in the province of
            Iloilo, Philippines as a simple business venture.
          </p>
          <p className = "blockquote ml-5 mt-3 mr-5">
            The first outlet was in The Atrium Mall, Gen. Luna St., Iloilo City.
            On June 2002, Waffle Time started to penetrate the Metro Manila market.
            After which, we opened outlets in Cebu, Cagayan De Oro and Davao.
          </p>
          <p className = "blockquote ml-5 mt-3 mr-5 mb-5">
            Waffle Time opened its door to franchising on March 2004. After then Waffle
            Time Outlets mushroomed all over the Philippine Islands. This proves on our
            popularity and acceptance by our customers of all ages. And we&apos;ll still
            be opening more outlets as we continue to deliver delicious, nutritious and
            reasonably-priced waffles to everyone.
          </p>
          <span id = "about-info-descript">
          </span>
        </div>
        <div className = "col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <img className = "img-fluid" src = {waffy} />
        </div>
      </div>
    )
  }
}

export default About;
