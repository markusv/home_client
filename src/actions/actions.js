import config from '../config/config.js';

export const TURN_OFF_EVERYTHING = 'TURN_OFF_EVERYTHING';
export const TURN_ON_LIGHTS = 'TURN_ON_LIGHTS';
export const TURN_OFF_LIGHTS = 'TURN_OFF_LIGHTS';

export const turnOffEverythingStart = () => {
  return {
    type: TURN_OFF_EVERYTHING
  };
};

export const turnOffEverything = () => {
  return (dispatch) => {
    dispatch(turnOffEverythingStart());
    fetch(`${config.serverUrl}/turnOffEverything`);
  };
};

export const turnOnLightsStart = () => {
  return {
    type: TURN_ON_LIGHTS
  };
};

export const turnOnLights = () => {
  return (dispatch) => {
    dispatch(turnOnLightsStart());
    fetch(`${config.serverUrl}/futurehome/turnOnHomeMode`);
  };
};

export const turnOffLightsStart = () => {
  return {
    type: TURN_OFF_LIGHTS
  };
};

export const turnOffLights = () => {
  return (dispatch) => {
    dispatch(turnOffLightsStart());
    fetch(`${config.serverUrl}/futurehome/turnOnSleepMode`);
  };
};
