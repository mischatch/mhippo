import React, { Component } from 'react';
import Icon2 from '../../components/icon2';
import Select from 'react-select';
import { statesOptions, capitalize } from '../../components/selectors';
import { bindActionCreators } from 'redux';
import { addProfile } from '../../modules/profiles';
import { connect } from 'react-redux';
import 'react-select/dist/react-select.css';



class NewProfile extends Component {
  constructor(props){
    super(props);

    if(this.props.user){
      this.state = this.props.user;
    } else {
      this.state = {
        picUrl: '',
        name: '',
        occupation: '',
        city: '',
        state: '',
        bio: '',
        socialProfiles: [],
      };
    }


    this.icons = {'facebook': false, 'twitter': false, 'instagram': false, 'linkedin': false, 'google': false};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.handleSocial = this.handleSocial.bind(this);
    this.renderPic = this.renderPic.bind(this);
    this.switchIcon = this.switchIcon.bind(this);
  }

  handleChange(e){
    const name = e.target.name;
    let val = e.target.value;
    if(name === 'name' || name === 'occupation' || name === 'city'){
      val = val.split(' ').map(word => capitalize(word)).join(' ');
    }
    this.setState({
      [name]: val,
    });
  }

  handleSelection(e){
    e ? this.setState({ state: e.value }) : this.setState({ state: '' });
  }

  handleSocial(e){
    const iconsObj = this.icons;
    iconsObj[e] ? iconsObj[e] = false : iconsObj[e] = true;
    let icons = [];
    for(let name in iconsObj){
      if(iconsObj[name]){
        icons.push(name);
      }
    }
    this.setState({
      socialProfiles: icons
    });
  }

  renderPic(){
    let url = this.state.picUrl;
    if(url !== ''){
      var myRegex = /(https?:\/\/.*\.(?:png|jpg))/i;
      if(myRegex.test(url)){
        return (
          <img className='imageUpload' src={url} />
        );
      } else {
        return (
          <div className='image-err'>Not an image url</div>
        )
      }
    } else {
      return null;
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const newProfile = this.state;
    this.props.addProfile(newProfile);
    this.props.handleModal();
  }

  switchIcon(name, idx){
    if(this.icons[name]){
      return (
        <Icon2 iconName={name} key={idx} />
      );
    } else {
      return (
        <Icon2 iconName={name} type='off' key={idx} />
      );
    }
  }

  render(){
    const { picUrl, name, occupation, city, state, bio } = this.state;
    let disabled = !picUrl || !name || !occupation || !city || !state || !bio;


    return (
      <div className='Rectangle-2'>
        <h1 className='Add-New-Profile'>Add New Profile</h1>
        <div className='Oval'>{ this.renderPic() }</div>
        <div className='close' onClick={this.props.handleModal}><Icon2 iconName='close' /></div>
        <form onSubmit={this.handleSubmit}>
          <input
            className='Rectangle-4'
            name='picUrl'
            placeholder='Picture URL'
            value={this.state.picUrl}
            onChange={this.handleChange} />
          <input
            className='Rectangle-4'
            name='name'
            placeholder='Name'
            value={this.state.name}
            onChange={this.handleChange} />
          <input
            className='Rectangle-4'
            name='occupation'
            placeholder='Occupation'
            value={this.state.occupation}
            onChange={this.handleChange} />
          <div className='city-state'>
            <input
              className='Rectangle-4  city'
              name='city'
              placeholder='City'
              value={this.state.city}
              onChange={this.handleChange} />


            <Select
              className='menu-outer-top'
              name='state'
              placeholder='State'
              autoFocus
              value={this.state.state}
              onChange={this.handleSelection}
              options={statesOptions}/>


          </div>
          <textarea
            className='Rectangle-4'
            name='bio'
            placeholder='Short Bio (500 characters max)'
            value={this.state.bio}
            onChange={this.handleChange} />
          <label className='profiles'> Social Profiles</label>
          <div className='social-profiles'>
            { Object.keys(this.icons).map((name, idx) => <span key={idx} onClick={() => this.handleSocial(name)} >
            { this.switchIcon(name, idx) }
            </span> ) }
          </div>
          <div className='new-prof-btns'>
            <button
              className={ disabled ? 'disabled' : 'main' }
              onClick={this.handleSubmit}
              disabled={disabled}>Save</button>
            <button onClick={this.props.handleModal}>Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    addProfile: (user) => dispatch(addProfile(user)),
  };
};

export default connect(null, mapDispatchToProps)(NewProfile);
