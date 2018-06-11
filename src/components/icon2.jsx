import React from 'react';

const Icon2 = (props) => {
  const { type } = props;
  if (type === 'off'){
    return (
      <span className="icon">
        <img src={`/images/${props.iconName}-icon-off.svg`} />
      </span>
    );
  } else {
    return (
      <span className="icon">
        <img src={`/images/${props.iconName}-icon.svg`} />
      </span>
    );
  }
};

export default Icon2;
