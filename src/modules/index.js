import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import profiles from './profiles';

export default combineReducers({
  router: routerReducer,
  profiles,
});
