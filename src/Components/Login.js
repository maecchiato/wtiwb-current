import React from 'react';
import '../App.css';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import axios from 'axios';

import { Link } from 'react-router-dom';

import Administrator from './Administrator';

  const customStyles = {
      content: {
        top           :'50%',
        left          :'50%',
        right         :'auto',
        bottom        :'auto',
        marginRight   :'-50%',
        transform     :'translate(-50%, -50%)'
      }
    };

    Modal.setAppElement('#root')

class Login extends React.Component{
        constructor()
        {
          super();

          this.state = {
            modalIsOpen: false,
            username: '',
            password: '',
          };

          this.openModal = this.openModal.bind(this);
          this.afterOpenModal = this.afterOpenModal.bind(this);
          this.closeModal = this.closeModal.bind(this);
        }

        openModal(){
          this.setState({modalIsOpen: true});
        }

        afterOpenModal(){
          this.subtitle.style.color = '#f00';
        }

        closeModal(){
          this.setState({modalIsOpen: false});
        }

        handleClick(event)
        {
          var apiBaseUrl= "http://127.0.0.1/waffletimeapi/";
          var self = this;

          var payload={
            "email": this.state.username,
            "password": this.state.password
          }

          axios.post(apiBaseUrl+'login',payload)
          .then(function (response){
            console.log(response);
            if(response.data.code == 200)
            {
              console.log("Logged in Succesfully");
              var uploadScreen=[];
              // uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
              // self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
            }
            else if(response.data.code == 204)
            {
              console.log("Username password do not match");
              alert("Username or Password doesn't match");
            }
            else
            {
              console.log("Username does not exist");
              alert("Username does not exist");
            }
          })
          .catch(function (error)
          {
            console.log(error);
          });
        }

      

    render(){
      return(
      <div className = "container-fluid" id = "admin">
      <Modal
        isOpen = {this.state.modalIsOpen}
        onAfterOpen = {this.afterOpenMOdal}
        onRequestClose = {this.closeModal}
        style = {customStyles}
        contentLabel = "Sign-in"
      >

      <div className="modal-header">
        <h5 className="modal-title">Kindly verify your credentials</h5>
      </div>
      <form>
        <div className="modal-body">

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">Username</span>
            </div>
            <input type="text" onChange = {(event, newValue) => this.setState({username:newValue})} className="form-control" aria-label="Username" aria-describedby="inputGroup-sizing-default" />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">Password</span>
            </div>
            <input type="password" onChange = {(event, newValue) => this.setState({password:newValue})} className="form-control" aria-label="Password" aria-describedby="inputGroup-sizing-default" />
          </div>

        </div>
        <div className="modal-footer">
          <input type="submit" onClick = {(event) => this.handleClick(event)} className="btn btn-success" value = "Sign-in"/>
          <button type="button" onClick = {this.closeModal} className="btn btn-secondary">Close</button>
        </div>
      </form>
      </Modal>
        <div id = "admin-login" className = "row">
        <div className = "mt-5 ml-md-5">
          <Link to="/">
            <button className = "btn btn-success">
              Visit the Website
            </button>
          </Link>
          <button className = "btn btn-dark ml-2" onClick = {this.openModal}>
            Sign-in
          </button>
        </div>
      </div>
    </div>
    )
  }
}


export default Login;
