import React, { Component } from 'react';
import Icon from './icon'
import Icon2 from './icon2'


class Nav extends Component {
  constructor(props){
    super(props);

    this.state = {
      search: ''
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e){
    this.setState({
      search: e.target.value
    })
    this.props.handleSearch(e.target.value);
  }


  render(){
    return (
      <div className="nav-bar">
        <a onClick={this.props.scrollToTopWithCallback} title="Scroll top" className="nav-bar__logo nav-bar__element">
          <svg role="img"><use xlinkHref="/images/svg-assets.svg#logo"></use></svg>
        </a>

        <div className="nav-bar__element">
          <div className="nav-bar__search-container textbox-with-icon-container">
            <Icon iconName="search-icon" />
            <input
              onChange={this.handleInput}
              value={this.state.search}
              type="text" placeholder="search" className="nav-bar__search textbox" />
          </div>
        </div>
        <button onClick={this.props.handleModal} className='add-profile'>
          <Icon2 iconName="add" /><span className='btn-txt'>Add New Profile</span>
        </button>
      </div>
    )
  }
}
export default Nav;
