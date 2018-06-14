import React from 'react';
import '../App.css';

import { Link } from 'react-router-dom';

const Administrator = () => (
    <div id = "admin-administrator">
    <div id = "administrator-selection" className = "mt-1">
    <Link to="/admin">
        <div className = "alert alert-primary manage-btn" role = "alert">
          Account Settings
        </div>
      </Link>
      <Link to="/admin/manage">
        <div className = "alert alert-primary manage-btn" role = "alert">
          Content Management System
        </div>
      </Link>
      <Link to="/admin">
        <div className = "alert alert-primary manage-btn" role = "alert">
          Preference
        </div>
      </Link>
      <Link to="/admin">
        <div className = "alert alert-primary manage-btn" role = "alert">
          System Logs
        </div>
      </Link>
    </div>
    </div>
)

export default Administrator;
