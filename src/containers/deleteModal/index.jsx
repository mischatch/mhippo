import React from 'react';
import Icon2 from '../../components/icon2';

const DeleteModal = (props) => {
  return (
    <div className='delete-modal'>
      <div className='close' onClick={() => props.handleDeleteModal('')}><Icon2 iconName='close' /></div>
      <h1>Delete Profile</h1>
      <p>Are you sure you want to delete <b>{props.name}</b></p>
      <div className='delete-btns'>
        <button className='main' onClick={props.handleDelete}>Yes</button>
        <button className='empty' onClick={() => props.handleDeleteModal('')}>No</button>
      </div>
    </div>
  );
};

export default DeleteModal;
