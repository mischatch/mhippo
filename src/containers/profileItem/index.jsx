import React, { Component } from 'react';
import Icon from '../../components/icon';


class ProfileItem extends Component {

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
            <div>
              {socialProfiles.map((icon, idx) => <Icon iconName={icon} key={idx} />)}
            </div>
          </div>

          <div className='location'>
            <span><Icon iconName="location-icon" /></span> <span>{city}</span>, <span>{state}</span>
          </div>
          <div className='bio'>
            <p>{bio}</p>
          </div>
          <div className='btns'>
            <button className='main'>View Details</button>
            <button className='empty'>Edit</button>
            <button className='red'>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileItem;
