import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  TURN_OFF_EVERYTHING,
  TURN_OFF_EVERYTHING_SUCCESS,
  TURN_OFF_EVERYTHING_ERROR,
  TURN_ON_LIGHTS,
  TURN_ON_LIGHTS_SUCCESS,
  TURN_ON_LIGHTS_ERROR,
  TURN_OFF_LIGHTS,
  TURN_OFF_LIGHTS_SUCCESS,
  TURN_OFF_LIGHTS_ERROR
} from '../actions/actions';


const initialState = {
  turnOnLightsActive: false,
  turnOffLigthsActive: false,
  turnOffEverythingActive: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TURN_OFF_EVERYTHING:
      return Object.assign({}, state, {
        turnOffEverythingActive: true
      });
    case TURN_OFF_EVERYTHING_SUCCESS:
    case TURN_OFF_EVERYTHING_ERROR:
      return Object.assign({}, state, {
        turnOffEverythingActive: false
      });
    case TURN_ON_LIGHTS:
      return Object.assign({}, state, {
        turnOnLightsActive: true
      });
    case TURN_ON_LIGHTS_SUCCESS:
    case TURN_ON_LIGHTS_ERROR:
      return Object.assign({}, state, {
        turnOnLightsActive: false
      });
    case TURN_OFF_LIGHTS:
      return Object.assign({}, state, {
        turnOffLigthsActive: true
      });
    case TURN_OFF_LIGHTS_SUCCESS:
    case TURN_OFF_LIGHTS_ERROR:
      return Object.assign({}, state, {
        turnOffLigthsActive: false
      });
    default:
      return state;
  }
};

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
