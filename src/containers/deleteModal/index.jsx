import React from 'react';

const DeleteModal = (props) => {
  return (
    <div>
      <h1>Delete Profile</h1>
      <p>Are you sure you want to delete {props.name}</p>
      <button onClick={props.deleteProfile}>Delete Profile</button>
      <button onClick={props.handleDelete}>Cancel</button>
    </div>
  );
};

export default DeleteModal;
