import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
} from "../types/constants/wsActions";

import { WsActionsTypes } from "../types/types";

export type WsConnectionStartType = {
  readonly type: typeof WS_CONNECTION_START;
};

export type WsConnectionSuccessType = {
  readonly type: typeof WS_CONNECTION_SUCCESS;
};

export type WsConnectionErrorType = {
  readonly type: typeof WS_CONNECTION_ERROR;
};

export type WsConnectionCloseType = {
  readonly type: typeof WS_CONNECTION_CLOSED;
};

export type WsGetMessageType = {
  readonly type: typeof WS_GET_MESSAGE;
  payload: WsActionsTypes;
};

export type WsActions =
  | WsConnectionStartType
  | WsConnectionSuccessType
  | WsConnectionErrorType
  | WsConnectionCloseType
  | WsGetMessageType;

export const wsConnectStart = (): WsConnectionStartType => {
  return {
    type: WS_CONNECTION_START,
  };
};

export const wsConnectSuccess = (): WsConnectionSuccessType => {
  return {
    type: WS_CONNECTION_SUCCESS,
  };
};

export const wsConnectError = (): WsConnectionErrorType => {
  return {
    type: WS_CONNECTION_ERROR,
  };
};

export const wsConnectClosed = (): WsConnectionCloseType => {
  return {
    type: WS_CONNECTION_CLOSED,
  };
};

export const wsGetMessage = (message: WsActionsTypes): WsGetMessageType => {
  return {
    type: WS_GET_MESSAGE,
    payload: message,
  };
};
