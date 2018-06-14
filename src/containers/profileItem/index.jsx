import React, { Component } from 'react';
import Icon2 from '../../components/icon2';
import Modal from 'react-modal';
import { customStyles } from '../../components/selectors';
import EditProfile from '../editProfile';
import NewProfile from '../newProfile';
import ShowProfile from '../show';


class ProfileItem extends Component {
  constructor(props){
    super(props);

    this.state = {
      modalOpen: false,
      showModal: false,
    };

    this.handleModal = this.handleModal.bind(this);
    this.handleShowModal = this.handleShowModal.bind(this);
  }

  handleModal(){
    this.state.modalOpen ?
    this.setState({ modalOpen: false })
    : this.setState({ modalOpen: true });
  }

  handleShowModal(){
    this.state.showModal ?
    this.setState({ showModal: false })
    : this.setState({ showModal: true });
  }

  render(){
    const { bio, city, name, occupation, picUrl, socialProfiles, state } = this.props.data;
    return(
      <div className='profile'>
        <div className='image'>
          <img src={picUrl} />
        </div>
        <div className='info'>

          <div className='profile-top-box'>
            <div>
              <p className='name'>{name}</p>
              <p className='occupation'>{occupation}</p>
            </div>
            <div className='social-profiles'>
              {socialProfiles.map((icon, idx) => <Icon2 iconName={icon} key={idx} />)}
            </div>
          </div>

          <div className='location'>
            <span><Icon2 iconName="location" /></span> <span>{city}</span>, <span>{state}</span>
          </div>
          <div className='bio'>
            <p>{bio}</p>
          </div>
          <div className='btns'>
            <button onClick={this.handleShowModal}className='main'>View Details</button>
            <button onClick={this.handleModal} className='empty'>Edit</button>
            <button onClick={() => this.props.handleDeleteModal(name)} className='red'>Delete</button>
          </div>
        </div>

        <Modal
        contentLabel="Modal"
        ariaHideApp={false}
        isOpen={this.state.modalOpen}
        onRequestClose={this.handleModal}
        style={customStyles} >

          <EditProfile user={this.props.data} handleModal={this.handleModal} />

        </Modal>

        <Modal
        contentLabel="Modal"
        ariaHideApp={false}
        isOpen={this.state.showModal}
        onRequestClose={this.handleShowModal}
        style={customStyles} >

          <ShowProfile user={this.props.data} handleShowModal={this.handleShowModal} />

        </Modal>

      </div>
    );
  }
}

export default ProfileItem;
