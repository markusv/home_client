export const TURN_OFF_EVERYTHING = 'TURN_OFF_EVERYTHING';
export const TURN_OFF_EVERYTHING_SUCCESS = 'TURN_OFF_EVERYTHING_DONE';
export const TURN_OFF_EVERYTHING_ERROR = 'TURN_OFF_EVERYTHING_ERROR';
export const TURN_ON_LIGHTS = 'TURN_ON_LIGHTS';
export const TURN_ON_LIGHTS_SUCCESS = 'TURN_ON_LIGHTS_SUCCESS';
export const TURN_ON_LIGHTS_ERROR = 'TURN_ON_LIGHTS_ERROR';
export const TURN_OFF_LIGHTS = 'TURN_OFF_LIGHTS';
export const TURN_OFF_LIGHTS_SUCCESS = 'TURN_OFF_LIGHTS_SUCCESS';
export const TURN_OFF_LIGHTS_ERROR = 'TURN_OFF_LIGHTS_ERROR';
export const LISTEN_TO_MUSIC = 'LISTEN_TO_MUSIC';
export const LISTEN_TO_MUSIC_SUCCESS = 'LISTEN_TO_MUSIC_SUCCESS';
export const LISTEN_TO_MUSIC_ERROR = 'LISTEN_TO_MUSIC_ERROR';
export const WATCH_APPLE_TV = 'WATCH_APPLE_TV';
export const WATCH_APPLE_TV_SUCCESS = 'WATCH_APPLE_TV_SUCCESS';
export const WATCH_APPLE_TV_ERROR = 'WATCH_APPLE_TV_ERROR';
export const LOAD_TEMPERATURE = 'LOAD_TEMPERATURE';
export const LOAD_TEMPERATURE_SUCCESS = 'LOAD_TEMPERATURE_SUCCESS';
export const LOAD_TEMPERATURE_ERROR = 'LOAD_TEMPERATURE_ERROR';
export const VISIBLITY_CHANGE = 'VISIBLITY_CHANGE';

const turnOffEverythingStart = () => {
  return {
    type: TURN_OFF_EVERYTHING
  };
};

const turnOffEverythingSuccess = () => {
  return {
    type: TURN_OFF_EVERYTHING_SUCCESS
  };
};

const turnOffEverythingError = () => {
  return {
    type: TURN_OFF_EVERYTHING_ERROR
  };
};

export const turnOffEverything = () => {
  return (dispatch) => {
    dispatch(turnOffEverythingStart());
    fetch('/api/turnOffEverything')
      .then(() => {
        dispatch(turnOffEverythingSuccess());
      }).catch(() => {
        dispatch(turnOffEverythingError());
      });
  };
};

const turnOnLightsStart = () => {
  return {
    type: TURN_ON_LIGHTS
  };
};

const turnOnLightsSuccess = () => {
  return {
    type: TURN_ON_LIGHTS_SUCCESS
  };
};

const turnOnLightsError = () => {
  return {
    type: TURN_ON_LIGHTS_ERROR
  };
};

export const turnOnLights = () => {
  return (dispatch) => {
    dispatch(turnOnLightsStart());
    fetch('/api/futurehome/turnOnHomeMode')
      .then(() => {
        dispatch(turnOnLightsSuccess());
      }).catch(() => {
        dispatch(turnOnLightsError());
      });
  };
};

const turnOffLightsStart = () => {
  return {
    type: TURN_OFF_LIGHTS
  };
};

const turnOffLightsSuccess = () => {
  return {
    type: TURN_OFF_LIGHTS_SUCCESS
  };
};

const turnOffLightsError = () => {
  return {
    type: TURN_OFF_LIGHTS_ERROR
  };
};

export const turnOffLights = () => {
  return (dispatch) => {
    dispatch(turnOffLightsStart());
    fetch('/api/futurehome/turnOnSleepMode')
      .then(() => {
        dispatch(turnOffLightsSuccess());
      }).catch(() => {
        dispatch(turnOffLightsError());
      });
  };
};

const listenToMusicStart = () => {
  return {
    type: LISTEN_TO_MUSIC
  };
};

const listenToMusicSuccess = () => {
  return {
    type: LISTEN_TO_MUSIC_SUCCESS
  };
};

const listenToMusicError = () => {
  return {
    type: LISTEN_TO_MUSIC_ERROR
  };
};

export const listenToMusic = () => {
  return (dispatch) => {
    dispatch(listenToMusicStart());
    fetch('/api/harmony/listenToMusic')
      .then(() => {
        dispatch(listenToMusicSuccess());
      }).catch(() => {
        dispatch(listenToMusicError());
      });
  };
};

const watchAppleTvStart = () => {
  return {
    type: WATCH_APPLE_TV
  };
};

const watchAppleTvSuccess = () => {
  return {
    type: WATCH_APPLE_TV_SUCCESS
  };
};

const watchAppleTvError = () => {
  return {
    type: WATCH_APPLE_TV_ERROR
  };
};

export const watchAppleTv = () => {
  return (dispatch) => {
    dispatch(watchAppleTvStart());
    fetch('/api/harmony/appleTv')
      .then(() => {
        dispatch(watchAppleTvSuccess());
      }).catch(() => {
        dispatch(watchAppleTvError());
      });
  };
};

const loadTemperatureStart = () => {
  return {
    type: LOAD_TEMPERATURE
  };
};

const loadTemperatureSuccess = (temperature) => {
  return {
    type: LOAD_TEMPERATURE_SUCCESS,
    temperature
  };
};

const loadTemperatureError = () => {
  return {
    type: LOAD_TEMPERATURE_TV_ERROR
  };
};

let counter = 0;
export const fetchTemperature = () => {
  return (dispatch, getState) => {
    if (getState().loadTemperature) { return; } // already loading
    dispatch(loadTemperatureStart());
    fetch('/api/futurehome/livingroomTemperature')
      .then((response) => {
        response.json().then((data) => {
          counter = counter + 1;
          dispatch(loadTemperatureSuccess(`${data.temperature} c: ${counter}`));
        });
      }).catch(() => {
        dispatch(loadTemperatureError());
      });
  };
};

export const setVisibility = (visible) => {
  return {
    type: VISIBLITY_CHANGE,
    visible
  };
};
