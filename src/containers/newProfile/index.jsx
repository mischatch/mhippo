import React, { Component } from 'react';
import Icon from '../../components/icon';
import Select from 'react-select';
import { statesOptions } from '../../components/selectors';

class NewProfile extends Component {
  constructor(props){
    super(props);

    this.state = {
      url: '',
      names: '',
      occupation: '',
      city: '',
      state: '',
      bio: '',

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.renderPic = this.renderPic.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSelection(e){
    this.setState({
      state: e.value,
    });
  }

  renderPic(){
    if(this.url !== ''){
      let url = this.state.url;
      return (
        <img className='imageUpload' src={url} />
      );
    } else {
      return null;
    }
  }

  handleSubmit(){

  }

  render(){
    const { url, names, occupation, city, state, bio } = this.state;
    let disabled = !url || !names || !occupation || !city || !state || !bio;

    return (
      <div className='Rectangle-2'>
        <h1 className='Add-New-Profile'>Add New Profile</h1>
        <div className='Oval'>{this.renderPic()}</div>
        <form onSubmit={this.handleSubmit}>
          <input
            className='Rectangle-4'
            name='url'
            placeholder='Picture URL'
            value={this.state.url}
            onChange={this.handleChange} />
          <input
            className='Rectangle-4'
            name='names'
            placeholder='Names'
            value={this.state.names}
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
              className='Rectangle-4  state'
              name='state'
              placeholder='State'
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
          <label> Social Profiles</label>
          <div>
            <Icon iconName='facebook-icon-off'  />
            <Icon iconName='twitter-icon-off' />
            <Icon iconName='instagram-icon-off' />
            <Icon iconName='google-icon-off'  />
          </div>

          <button onClick={this.handleSubmit} disabled={disabled}>Save</button>
          <button onClick={this.props.closeModal}>Cancel</button>
        </form>
      </div>
    );
  }
}

export default NewProfile;
