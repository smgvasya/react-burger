export const WS_CONNECTION_START = 'WS_CONNECTION_START';
export const WS_CONNECTION_START_USER = 'WS_CONNECTION_START_USER';
export const WS_CONNECTION_SUCCESS = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED = 'WS_CONNECTION_CLOSED';
export const WS_GET_MESSAGE = 'WS_GET_DATA';
export const WS_GET_MESSAGE_USER = 'WS_GET_MESSAGE_USER';
export const WS_SEND_DATA = 'WS_SEND_MESSAGE';


export const wsConnectStart = () => {
  return {
    type: WS_CONNECTION_START,
  };
};

export const wsConnectStartUser = () => {
  return {
    type: WS_CONNECTION_START_USER,
  };
};

export const wsConnectSuccess = () => {
  return {
    type: WS_CONNECTION_SUCCESS,
  };
};

export const wsConnectError = () => {
  return {
    type: WS_CONNECTION_ERROR
  };
};

export const wsConnectClosed = () => {
  return {
    type: WS_CONNECTION_CLOSED,
  };
};

// export const wsGetMessageUser = (message) => {
//   return {
//     type: WS_GET_MESSAGE_USER,
//     payload: message,
//   };
// };

export const wsGetMessage = (message) => {
  return {
    type: WS_GET_MESSAGE,
    payload: message,
  };
};


// export const wsSendMessage = message => {
//   return {
//     type: WS_SEND_MESSAGE,
//     payload: message,
//   };
// };
