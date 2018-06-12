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
      allPeople: [],
      search: [],
    };

    this.handleModal = this.handleModal.bind(this);
    this.handleDeleteModal = this.handleDeleteModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentWillMount(){
    this.props.loadInitialProfiles();
  }

  componentWillReceiveProps(nextProps){
    setTimeout(() => this.setState({
      allPeople: nextProps.profileItems,
      search: nextProps.profileItems,
    }), 1000);
  }

  handleSearch(name){
    let filtred = [];
    filtred = this.state.allPeople.filter(user => {
      let fname = user.name.split(' ')[0];
      let lname = user.name.split(' ')[1];
      let find = fname.startsWith(name) || lname.startsWith(name);
      return find;
    });
    name === '' ? this.setState({ search: this.state.allPeople }) : this.setState({search: filtred});
  }

  handleModal(){
    this.state.modalOpen ?
    this.setState({ modalOpen: false })
    : this.setState({ modalOpen: true });
  }

  handleDeleteModal(name){
    this.state.deleteModal ?
    this.setState({ deleteModal: false, deleteName: name })
    : this.setState({ deleteModal: true, deleteName: name });
  }

  handleDelete(){
    const name = this.state.deleteName;
    this.props.deleteProfile(name);
    this.handleDeleteModal();
  }

  render(){
    const { deleteProfile, searchProfile } = this.props;
    let loading = this.state.search.length === 0 && this.state.allPeople.length === 0;
    return (
      <div>
        <Nav handleModal={this.handleModal} handleSearch={this.handleSearch} />

        <div className="mainContent">
          { loading ? <h1>Loading Results ... </h1> : <h1>User Profiles({this.state.search.length})</h1>}
          <div className='profiles'>
            {this.state.search.map((item, idx) => (
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

          <DeleteModal
            name={this.state.deleteName}
            handleDelete={this.handleDelete}
            handleDeleteModal={this.handleDeleteModal} />

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
