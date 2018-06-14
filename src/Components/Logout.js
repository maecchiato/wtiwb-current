import React from 'react';
import '../App.css';
import axios from 'axios';

import { Link } from 'react-router-dom';

class Admin extends React.Component{
    render(){
      return(
      <div className = "container-fluid" id = "admin">
        <div id = "admin-logout" className = "row">
        <div className = "mt-5 ml-md-5">
          <Link to="/">
            <button className = "btn btn-success">
              Visit the Website
            </button>
          </Link>
          <button className = "btn btn-dark ml-2" onClick = {this.props.handler}>
            Sign-out
          </button>
          <p className = "lead small mt-2">Signed in as: <abbr title = "User that is currently signed-in to the System">Administrator</abbr></p>
        </div>
      </div>
    </div>
    )
  }
}


export default Admin;
