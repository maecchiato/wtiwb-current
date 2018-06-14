import React, { Component } from 'react';
import '../App.css';

import { Link } from 'react-router-dom';
import Accounts from './Accounts';
import Advertisements from './Advertisements';
import Stores from './Stores';

class Manage extends Component {
    render() {
    return (
      <div  className = "container-fluid">
        <div className = "row">
        <div className = "col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 mt-4">
        <Link to="/admin">
          <ul className = "list-inline mt-2 mb-2 manage-return ml-1">
            <li className = "list-inline-item float">
              <span className="oi oi-chevron-left"></span>
            </li>
            <li className = "list-inline-item">
              <p className = "text-lead">Return</p>
            </li>
          </ul>
        </Link>
          <div id className="nav flex-column nav-pills " id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <a className="manage-nav nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Manage Accounts</a>
            <a className="manage-nav nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Manage Advertisements</a>
            <a className="manage-nav nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Manage Stores</a>
          </div>
        </div>
        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12 mt-4">
        <p className = "display-4" id = "manage-title">
          Waffle Time Content Management System
        </p>
          <div className="tab-content" id="v-pills-tabContent">
              <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
              <Accounts />
              </div>
            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
              <Advertisements />
            </div>
            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
              <Stores />
            </div>
          </div>
        </div>
          <div className = "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-5">

          </div>
        </div>
    </div>
  )
};
}


export default Manage;
