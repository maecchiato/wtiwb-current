import React from 'react';
import Modal from 'react-modal';
import '../App.css';

import flavorOFTheMonth from './Layouts/img/flavor-of-the-month-display.jpg';

const customStyles = {
    content: {
      top           :'50%',
      left          :'50%',
      right         :'auto',
      bottom        :'auto',
      marginRight   :'-50%',
      backgroundColor: 'white',
      padding: '0',
      transform     :'translate(-50%, -50%)',
      overlfow: 'scroll'
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

  componentDidMount(){
      let visited = localStorage["alreadyVisited"];
      if(!visited)
      {
          this.inputElement.click()
          localStorage["alreadyVisited"] = true
      }
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
        <div>
        <button ref={input => this.inputElement = input}  type = "button" className = "" onClick = {this.openModal} />
        <Modal
          isOpen = {this.state.modalIsOpen}
          onAfterOpen = {this.afterOpenModal}
          onRequestClose = {this.closeModal}
          style = {customStyles}
          contentLabel = "First Website View"
        >
          <div className = "modal-body">
                <img src = {flavorOFTheMonth} className = "img-fluid pb-lg-5" alt = "Waffletime's Fillings of the Month is here! Grilled Beef Hotdog And Smokey Bacon Hotdog up for grabs! FRESHLY BAKED @ SITE"/>
          </div>

          <div className = "modal-footer">
            <button type = "button" onClick = {this.closeModal} className = "btn btn-primary">Close</button>
          </div>
        </Modal>

        </div>
      )
    }
}

export default PartyPackage
