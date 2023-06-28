import {
  WS_CONNECTION_START_USER,
  WS_CONNECTION_SUCCESS_USER,
  WS_CONNECTION_ERROR_USER,
  WS_CONNECTION_CLOSED_USER,
  WS_GET_MESSAGE_USER,
} from "../types/constants/wsActionsUser";

import { WsActionsTypes } from "../types/types";

export type WsConnectionStartUserType = {
  readonly type: typeof WS_CONNECTION_START_USER;
};

export type WsConnectionSuccessUserType = {
  readonly type: typeof WS_CONNECTION_SUCCESS_USER;
};

export type WsConnectionErrorUserType = {
  readonly type: typeof WS_CONNECTION_ERROR_USER;
};

export type WsConnectionCloseUserType = {
  readonly type: typeof WS_CONNECTION_CLOSED_USER;
};

export type WsGetMessageUserType = {
  readonly type: typeof WS_GET_MESSAGE_USER;
  payload: WsActionsTypes;
};

export type WsActionsUser =
  | WsConnectionStartUserType
  | WsConnectionSuccessUserType
  | WsConnectionErrorUserType
  | WsConnectionCloseUserType
  | WsGetMessageUserType;

export const wsConnectStartUser = (): WsConnectionStartUserType => {
  return {
    type: WS_CONNECTION_START_USER,
  };
};

export const wsConnectSuccessUser = (): WsConnectionSuccessUserType => {
  return {
    type: WS_CONNECTION_SUCCESS_USER,
  };
};

export const wsConnectErrorUser = (): WsConnectionErrorUserType => {
  return {
    type: WS_CONNECTION_ERROR_USER,
  };
};

export const wsConnectClosedUser = (): WsConnectionCloseUserType => {
  return {
    type: WS_CONNECTION_CLOSED_USER,
  };
};

export const wsGetMessageUser = (
  message: WsActionsTypes
): WsGetMessageUserType => {
  return {
    type: WS_GET_MESSAGE_USER,
    payload: message,
  };
};
