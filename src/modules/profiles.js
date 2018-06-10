import { initialProfilesData } from './initialProfilesData';

export const LOAD_PROFILES = 'profiles/LOAD_PROFILES';
export const OPEN_MODAL = 'profiles/OPEN_MODAL';
export const CLOSE_MODAL = 'profiles/CLOSE_MODAL';
export const SEARCH_CHANGE = 'profiles/SEARCH_CHANGE';

const initialState = {
  items: [],
  searchTerm: '',
  isModalOpen: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROFILES:
      return {
        ...state,
        items: action.payload,
      };

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

