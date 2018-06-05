import React from 'react';
import '../App.css';

import { Link } from 'react-router-dom';

import Navigation from './Navigation';
import Login from './Login';


const Admin = () => (
    <div className = "container-fluid" id = "admin">
      <div id = "admin-section" className = "row">
          <div className = "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <h2 className = "display-4 ml-md-5">
              Waffle Time Content Management System
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
            </div>
          </div>
          <div className = "col-xl-1 col-lg-1 col-md-1 col-sm-12 col-xs-12">
          </div>
          <div className = "col-xl-$ col-lg-4 col-md-4 col-sm-12 col-xs-12">
          </div>
          <div className = "col-xl-1 col-lg-1 col-md-1 col-sm-12 col-xs-12">
          </div>
      </div>
    </div>
);

export default Admin;
