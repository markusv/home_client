import {
  LOAD_TEMPERATURE,
  LOAD_TEMPERATURE_SUCCESS,
  LOAD_TEMPERATURE_ERROR
} from '../actions/actions';


const initialState = {
  livingroom: -1
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TEMPERATURE:
      return Object.assign({}, state, {
        loadTemperature: true
      });
    case LOAD_TEMPERATURE_SUCCESS:
      return Object.assign({}, state, {
        loadTemperature: false,
        temperature: action.temperature
      });
    case LOAD_TEMPERATURE_ERROR:
      return Object.assign({}, state, {
        loadTemperature: false
      });
    default:
      return state;
  }
};
