import { combineReducers } from 'redux';
import activities from './activities.js';
import lights from './lights.js';
import temperature from './temperature.js';

export default combineReducers({
  activities,
  lights,
  temperature
});
