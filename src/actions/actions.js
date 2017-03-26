import config from '../config/config.js';

export const TURN_ON_LIGHTS = 'TURN_ON_LIGHTS';
export const TURN_OFF_LIGHTS = 'TURN_OFF_LIGHTS';

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
