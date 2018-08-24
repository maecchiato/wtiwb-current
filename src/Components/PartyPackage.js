import React from 'react';
import Modal from 'react-modal';
import '../App.css';
import ReactToolTip from 'react-tooltip';
import {findDOMNode} from 'react-dom'

import wafflestore from './Layouts/img/waffle-store.jpg';
import wafflestorePackageA from './Layouts/img/waffle-store-packageA.jpg';
import wafflestorePackageB from './Layouts/img/waffle-store-packageB.jpg';

const customStyles = {
    content: {
      top           :'55%',
      left          :'50%',
      right         :'auto',
      bottom        :'auto',
      marginRight   :'-50%',
      backgroundColor: 'white',
      transform     :'translate(-50%, -50%)',
      overlfow: 'scroll',
      height: '90vh'
    },
    overlay: {
      zIndex      : '9999'
    }
  };

  Modal.setAppElement('#root')

class PartyPackage extends React.Component
{
  constructor()
  {
    super();

    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(){
    this.setState({modalIsOpen: true});
  }

  afterOpenModal(){
  //  this.subtitle.style.color = '#f00';
  }

  closeModal(){
    this.setState({modalIsOpen: false});
  }
    render()
    {
      return(
        <div id = "partypackage-section" className = "row">
        <Modal
          isOpen = {this.state.modalIsOpen}
          onAfterOpen = {this.afterOpenModal}
          onRequestClose = {this.closeModal}
          style = {customStyles}
          contentLabel = "Party Package Information"
        >
          <div className = "modal-body">
            <div className = "row party-package-modal">
              <div className = "col-md-6 col-lg-6 col-xl-6 col-sm-6 col-12">
                <p className = "h2 text-center title pb-5">Package A</p>
                <div className = "card-front">
                  <img src = {wafflestorePackageA} alt = "The Best Value for your Money" classsName = "img-fluid img-cart-display d-block"/>
                  <div className = "card-back">
                    <p className = "mt-5 mx-3 h5">Inclusions:</p>
                      <ul className = "h6">
                        <li>
                          	100 Assorted Waffles
                        </li>
                      </ul>
                      <p className = "mt-5 mx-3 h5">Pricing:</p>
                        <ul className = "h6">
                          <li>
                            	Manila: P6,000.00
                          </li>
                          <li>
                            Visayas & Mindanao: P5,000.00
                          </li>
                        </ul>
                        <div className="btn-group dropright mt-5 float-right mr-3">
                          <button type="button" className="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Inquire Now via
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="http://m.me/WaffleTimeInc" target="_blank" rel = "noopener noreferrer">Facebook Messenger</a>
                            <a className="dropdown-item" href="mailto:customerservice@waffletime.com?Subject=Party%20Package%20Inquiry">Email</a>
                            <a href = "#v-pills-contact-tab" className="dropdown-item"  ref = "tooltip" data-tip="Refer to our Contact Section Below">Contact Us</a>
                            <button className = "d-none" onClick = {() => {ReactToolTip.hide(findDOMNode(this.refs.tooltip))}}></button>
                            <ReactToolTip effect = "float" place = "right" type = "info" />
                            </div>
                        </div>

                  </div>
                </div>
              </div>
              <div className = "col-md-6 col-lg-6 col-xl-6 col-sm-6 col-12">
                <p className = "h2 text-center title pb-5">Package B</p>
                <div className = "card-front">
                  <img src = {wafflestorePackageB} alt = "The Best Value for your Money" classsName = "img-fluid img-cart-display d-block"/>
                  <div className = "card-back">
                    <p className = "hello mb-0">
                      <p className = "mt-5 mx-3 h5">Inclusions:</p>
                        <ul className = "h6">
                          <li>
                              100 Assorted Waffles
                          </li>
                          <li>
                              100 Iced Teas
                          </li>
                        </ul>
                        <p className = "mt-5 mx-3 h5">Pricing:</p>
                          <ul className = "h6">
                            <li>
                                Manila: P7,500.00
                            </li>
                            <li>
                              Visayas & Mindanao: P7,000.00
                            </li>
                          </ul>
                          <div className="btn-group dropright mt-5 float-right mr-3">
                            <button type="button" className="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Inquire Now via
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="https://www.facebook.com/messages/t/WaffleTimeInc" target="_blank" rel = "noopener noreferrer">Facebook Messenger</a>
                              <a className="dropdown-item" href="mailto:customerservice@waffletime.com?Subject=Party%20Package%20Inquiry">Email</a>
                              <a href = "#v-pills-contact-tab" className="dropdown-item"  ref = "tooltip" data-tip="Refer to our Contact Section Below">Contact Us</a>
                              <button className = "d-none" onClick = {() => {ReactToolTip.hide(findDOMNode(this.refs.tooltip))}}></button>
                              <ReactToolTip effect = "float" place = "right" type = "info" />
                              </div>
                          </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className = "modal-footer">
            <button type = "button" onClick = {this.closeModal} className = "btn btn-secondary">Close</button>
          </div>
        </Modal>
        <div className = "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <p className = "h3 ml-3 title"> Invite the Pambansang Waffle ng Pilipinas to your Party!</p>
        </div>
        <div className = "col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
          <p className = "p ml-3">Waffle Time offers party packages to cater everyone’s life events such as Birthday
          Parties, School Events, Fairs, Exhibits, Food Bazaars and many more. As the Pambansang Waffle ng Pilipinas,
          we want to be with you anytime and anywhere in any of your special experiences and memories. Ibang-iba ang
          “filling” kapag ikaw ang siyang kapiling!</p>
          <div className= "mt-5 ml-3">
            <button type = "button" className = "btn btn-success" onClick = {this.openModal}>
              Avail Our Packages
            </button>
          </div>
        </div>
        <div className = "col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
        <div className = "text-center pt-5 pt-sm-5 pt-xl-0 pt-lg-3 pt-md-3">
            <img src = {wafflestore} alt = "Party Package of Waffle Time" className = "img-fluid d-block mx-auto"/>
        </div>
        </div>

        </div>
      )
    }
}

export default PartyPackage
