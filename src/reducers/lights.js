import {
  TURN_OFF_EVERYTHING_SUCCESS,
  TURN_ON_LIGHTS,
  TURN_ON_LIGHTS_SUCCESS,
  TURN_ON_LIGHTS_ERROR,
  TURN_ON_LIGHTS_ABIT,
  TURN_ON_LIGHTS_ABIT_SUCCESS,
  TURN_ON_LIGHTS_ABIT_ERROR,
  TURN_OFF_LIGHTS,
  TURN_OFF_LIGHTS_SUCCESS,
  TURN_OFF_LIGHTS_ERROR,
  SET_LIGHTSON_STATUS
} from '../actions/actions';

const initialState = {
  turnOnLightsActive: false,
  turnOnLightsABitActive: false,
  turnOffLigthsActive: false,
  lightsOn: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TURN_ON_LIGHTS:
      return Object.assign({}, state, {
        turnOnLightsActive: true
      });
    case TURN_ON_LIGHTS_SUCCESS:
      return Object.assign({}, state, {
        lightsOn: true,
        turnOnLightsActive: false
      });
    case TURN_ON_LIGHTS_ERROR:
      return Object.assign({}, state, {
        turnOnLightsActive: false
      });
    case TURN_ON_LIGHTS_ABIT:
      return Object.assign({}, state, {
        turnOnLightsABitActive: true
      });
    case TURN_ON_LIGHTS_ABIT_SUCCESS:
      return Object.assign({}, state, {
        lightsOn: true,
        turnOnLightsABitActive: false
      });
    case TURN_ON_LIGHTS_ABIT_ERROR:
      return Object.assign({}, state, {
        turnOnLightsABitActive: false
      });
    case TURN_OFF_LIGHTS:
      return Object.assign({}, state, {
        turnOffLigthsActive: true
      });
    case TURN_OFF_LIGHTS_SUCCESS:
      return Object.assign({}, state, {
        lightsOn: false,
        turnOffLigthsActive: false
      });
    case TURN_OFF_LIGHTS_ERROR:
      return Object.assign({}, state, {
        turnOffLigthsActive: false
      });
    case TURN_OFF_EVERYTHING_SUCCESS:
      return Object.assign({}, state, {
        lightsOn: false
      });
    case SET_LIGHTSON_STATUS:
      return Object.assign({}, state, {
        lightsOn: action.on
      });
    default:
      return state;
  }
};
