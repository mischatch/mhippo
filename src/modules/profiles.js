import { initialProfilesData } from './initialProfilesData';
import merge from 'lodash/merge';

export const LOAD_PROFILES = 'profiles/LOAD_PROFILES';
export const OPEN_MODAL = 'profiles/OPEN_MODAL';
export const CLOSE_MODAL = 'profiles/CLOSE_MODAL';
export const SEARCH_CHANGE = 'profiles/SEARCH_CHANGE';
export const ADD_PROFILE = 'profiles/ADD_PROFILE';
export const DELETE_PROFILE = 'profiles/DELETE_PROFILE';

const initialState = {
  items: [],
  searchTerm: '',
  isModalOpen: false,
};

export default (state = initialState, action) => {
  let nextState;
  nextState = merge({}, state);
  const { items } = nextState;

  switch (action.type) {
    case LOAD_PROFILES:
      return {
        ...state,
        items: action.payload,
      };
    case ADD_PROFILE:
      nextState = merge({}, state);
      nextState.items.push(action.payload);
      return nextState;
    case DELETE_PROFILE:
      let name = action.payload;
      let newItems = [];
      newItems = items.filter(user => user.name !== name);
      nextState.items = newItems;
      return nextState;
    default:
      return state;
  }
};

export const loadInitialProfiles = () => {
  return dispatch => {
    dispatch({
      type: LOAD_PROFILES,
      payload: initialProfilesData,
    });
  };
};

export const addProfile = (user) => {
  return dispatch => {
    dispatch({
      type: ADD_PROFILE,
      payload: user
    })
  }
}
export const deleteProfile = (name) => {
  return dispatch => {
    dispatch({
      type: DELETE_PROFILE,
      payload: name
    })
  }
}
