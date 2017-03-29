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
  TURN_OFF_LIGHTS_ERROR,
  LISTEN_TO_MUSIC,
  LISTEN_TO_MUSIC_SUCCESS,
  LISTEN_TO_MUSIC_ERROR,
  WATCH_APPLE_TV,
  WATCH_APPLE_TV_SUCCESS,
  WATCH_APPLE_TV_ERROR
} from '../actions/actions';


const initialState = {
  turnOnLightsActive: false,
  turnOffLigthsActive: false,
  turnOffEverythingActive: false,
  listenToMusic: false,
  watchAppleTv: false
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
    case LISTEN_TO_MUSIC:
      return Object.assign({}, state, {
        listenToMusic: true
      });
    case LISTEN_TO_MUSIC_SUCCESS:
    case LISTEN_TO_MUSIC_ERROR:
      return Object.assign({}, state, {
        listenToMusic: false
      });
    case WATCH_APPLE_TV:
      return Object.assign({}, state, {
        watchAppleTv: true
      });
    case WATCH_APPLE_TV_SUCCESS:
    case WATCH_APPLE_TV_ERROR:
      return Object.assign({}, state, {
        watchAppleTv: false
      });
    default:
      return state;
  }
};

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
