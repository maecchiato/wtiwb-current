import React from 'react';

const Administrator = () => (
    <div id = "admin-administrator">
    <div id = "administrator-selection" className = "mt-1">
      <a href = "/" id = "administrator-manage" className = "manage-button">
        <div className = "alert alert-primary manage-btn" role = "alert">
          Manage Accounts
        </div>
      </a>
      <a href = "/" className = "manage-button">
        <div className = "alert alert-primary manage-btn" role = "alert">
          Manage Advertisements
        </div>
      </a>
      <a href = "/" className = "manage-button">
        <div className = "alert alert-primary manage-btn" role = "alert">
          Manage Stores
        </div>
      </a>
    </div>
    </div>
)

export default Administrator;
