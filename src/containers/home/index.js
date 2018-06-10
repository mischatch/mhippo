import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import Modal from 'react-modal';
import { loadInitialProfiles } from '../../modules/profiles';
import Nav from '../../components/nav';
import ProfileItem from '../profileItem';
import { customStyles } from '../../components/selectors';
import NewProfile from '../newProfile';

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      modalOpen: false,
    };

    this.modalOpen = this.modalOpen.bind(this);
    this.modalClose = this.modalClose.bind(this);
  }

  componentWillMount(){
    this.props.loadInitialProfiles();
  }

  modalOpen(){
    this.setState({
      modalOpen: true
    });
  }

  modalClose(){
    this.setState({
      modalOpen: false
    });
  }

  render(){
    const { profileItems, loadInitialProfiles } = this.props;

    return (
      <div>
        <Nav modalOpen={this.modalOpen} />

        <div className="mainContent">
          <h1>User Profiles({profileItems.length})</h1>
          <div className='profiles'>
            {profileItems.map((item, idx) => (
              <ProfileItem key={idx} data={item} />
            ))}
          </div>
        </div>

        <Modal
        contentLabel="Modal"
        ariaHideApp={false}
        isOpen={this.state.modalOpen}
        onRequestClose={this.modalClose}
        style={customStyles} >

        <NewProfile modalClose={this.modalClose} />

      </Modal>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  profileItems: state.profiles.items,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadInitialProfiles,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
