import React from 'react';
import '../App.css';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import { Link } from 'react-router-dom';

import Login from './Login';
import Logout from './Logout';
import Administrator from './Administrator';

class Admin extends React.Component{
    constructor(props){
      super(props)

      this.handler = this.handler.bind(this)
    }

    handler(e){
      e.preventDefault()
      this.setState({
          isLoggedIn: false
      })
    }

    state = {
      isLoggedIn: true
    }
    render(){
      return(
      <div className = "container-fluid" id = "admin">
        <div id = "admin-section" className = "row">
            <div className = "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <h2 className = "display-4 ml-md-5">
                Waffle Time Content Management System
              </h2>
              {(!this.state.isLoggedIn) ?  <Login /> : <Logout handler = {this.handler} />}
            </div>
            <div className = "col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12">
            </div>
            <div className = "col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <Administrator />
            </div>
        </div>
      </div>
    )
  }
}


export default Admin;
