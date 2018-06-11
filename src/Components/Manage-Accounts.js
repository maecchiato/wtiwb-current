import React from 'react';
import '../App.css';

import { Link } from 'react-router-dom';


import Administrator from './Administrator';

const accounts = () => (
    <div className = "container-fluid" id = "admin">
      <div id = "admin-section" className = "row">
          <div className = "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <h2 className = "display-4 ml-md-5">
              Waffle Time Content Management System ad amjdhaq iu
            </h2>
            <div className = "mt-5 ml-md-5">
              <Link to="/">
                <button className = "btn btn-success">
                  Visit the Website
                </button>
              </Link>
              <button className = "btn btn-dark ml-2">
                Sign-in
              </button>
              <p className = "lead small mt-2">Signed in as: <abbr title = "User that is currently signed-in to the System">Administrator</abbr></p>
            </div>
          </div>
          <div className = "col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12">
          </div>
          <div className = "col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <Administrator />
          </div>
      </div>
    </div>
);

export default accounts;
