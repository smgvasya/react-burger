export const WS_CONNECTION_START_USER = "WS_CONNECTION_START_USER";
export const WS_CONNECTION_SUCCESS_USER= "WS_CONNECTION_SUCCESS";
export const WS_CONNECTION_ERROR_USER = "WS_CONNECTION_ERROR";
export const WS_CONNECTION_CLOSED_USER = "WS_CONNECTION_CLOSED";
export const WS_GET_MESSAGE_USER = "WS_GET_MESSAGE_USER";


export const wsConnectStartUser = () => {
  return {
    type: WS_CONNECTION_START_USER,
  };
};

export const wsConnectSuccessUser = () => {
  return {
    type: WS_CONNECTION_SUCCESS_USER,
  };
};

export const wsConnectErrorUser  = () => {
  return {
    type: WS_CONNECTION_ERROR_USER,
  };
};

export const wsConnectClosedUser  = () => {
  return {
    type: WS_CONNECTION_CLOSED_USER,
  };
};

export const wsGetMessageUser  = (message) => {
  return {
    type: WS_GET_MESSAGE_USER,
    payload: message,
  };
};
