import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import Modal from 'react-modal';
import { loadInitialProfiles, deleteProfile } from '../../modules/profiles';
import Nav from '../../components/nav';
import ProfileItem from '../profileItem';
import { customStyles } from '../../components/selectors';
import NewProfile from '../newProfile';
import DeleteModal from '../deleteModal';

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      modalOpen: false,
      deleteModal: false,
      deleteName: '',
    };

    this.handleModal = this.handleModal.bind(this);
    this.handleDeleteModal = this.handleDeleteModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillMount(){
    this.props.loadInitialProfiles();
  }

  handleModal(){
    this.state.modalOpen ? this.setState({ modalOpen: false }) : this.setState({ modalOpen: true });
  }

  handleDeleteModal(name){
    this.state.deleteModal ? this.setState({ deleteModal: false, deleteName: '' }) : this.setState({ deleteModal: true, deleteName: name });
  }

  handleDelete(){
    const name = this.state.deleteName;
    this.props.deleteProfile(name);
  }

  render(){
    const { profileItems, loadInitialProfiles, deleteProfile } = this.props;

    return (
      <div>
        <Nav handleModal={this.handleModal} />

        <div className="mainContent">
          <h1>User Profiles({profileItems.length})</h1>
          <div className='profiles'>
            {profileItems.map((item, idx) => (
              <ProfileItem key={idx} data={item} handleDeleteModal={this.handleDeleteModal}/>
            ))}
          </div>
        </div>

        <Modal
        contentLabel="Modal"
        ariaHideApp={false}
        isOpen={this.state.modalOpen}
        onRequestClose={this.handleModal}
        style={customStyles} >

          <NewProfile handleModal={this.handleModal} />

        </Modal>

        <Modal
        contentLabel="deleteModal"
        ariaHideApp={false}
        isOpen={this.state.deleteModal}
        onRequestClose={this.handleDeleteModal}
        style={customStyles} >

          <DeleteModal name={this.state.name} handleDelete={this.handleDelete}/>

        </Modal>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  profileItems: state.profiles.items,
});

const mapDispatchToProps = dispatch => {
  return {
    loadInitialProfiles: () => dispatch(loadInitialProfiles()),
    deleteProfile: (name) => dispatch(deleteProfile(name)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);
