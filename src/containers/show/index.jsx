import React from 'react';
import Icon2 from '../../components/icon2';


const ShowProfile = (props) => {
  const { picUrl, name, city, state, occupation, bio, socialProfiles } = props.user;
  return (
    <div className='show-modal'>
      <div className='close' onClick={props.handleShowModal}><Icon2 iconName='close' /></div>
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
      </div>
    </div>
  );
};

export default ShowProfile;
