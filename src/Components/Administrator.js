import React from 'react';

const Administrator = () => (
    <div id = "admin-administrator">
    <div id = "administrator-selection" className = "mt-1">
      <a href = "/" id = "administrator-manage">
        <div className = "alert alert-primary" role = "alert">
          Manage Accounts
        </div>
      </a>
      <a href = "/">
        <div className = "alert alert-primary" role = "alert">
          Manage Advertisements
        </div>
      </a>
      <a href = "/">
        <div className = "alert alert-primary" role = "alert">
          Manage Stores
        </div>
      </a>
    </div>
    </div>
)

export default Administrator;
