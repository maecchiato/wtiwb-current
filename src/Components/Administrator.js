import React from 'react';
import '../App.css';

import { Link } from 'react-router-dom';

const Administrator = () => (
    <div id = "admin-administrator">
    <div id = "administrator-selection" className = "mt-1">
    <Link to="/admin/manage-accounts">
        <div className = "alert alert-primary manage-btn" role = "alert">
          Manage Accounts
        </div>
      </Link>
      <Link to="/admin/manage-advertisements">
        <div className = "alert alert-primary manage-btn" role = "alert">
          Manage Advertisements
        </div>
      </Link>
      <Link to="/admin/manage-stores">
        <div className = "alert alert-primary manage-btn" role = "alert">
          Manage Stores
        </div>
        </Link>
    </div>
    </div>
)

export default Administrator;
