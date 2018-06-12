import React from 'react';
import Icon from './icon'
import Icon2 from './icon2'


const Nav = props => (
  <div className="nav-bar">
    <a href="#" title="Scroll top" className="nav-bar__logo nav-bar__element">
      <svg role="img"><use xlinkHref="/images/svg-assets.svg#logo"></use></svg>
    </a>

    <div className="nav-bar__element">
      <div className="nav-bar__search-container textbox-with-icon-container">
        <Icon iconName="search-icon" />
        <input type="text" placeholder="search" className="nav-bar__search textbox" />
      </div>
    </div>
    <button onClick={props.handleModal} className='add-profile'>
      <Icon2 iconName="add" /><span>Add New Profile</span>
    </button>
  </div>
);

export default Nav;
