import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/index";
import { socketMiddleware } from "./middleware/socketMiddleware";
import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
} from "./types/constants/wsActions";
import {
  WS_CONNECTION_START_USER,
  WS_CONNECTION_SUCCESS_USER,
  WS_CONNECTION_ERROR_USER,
  WS_CONNECTION_CLOSED_USER,
  WS_GET_MESSAGE_USER,
} from "./types/constants/wsActionsUser";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const wsUrl = "wss://norma.nomoreparties.space/orders";

const wsActions = {
  wsInit: WS_CONNECTION_START,
  onOpen: WS_CONNECTION_SUCCESS,
  onError: WS_CONNECTION_ERROR,
  onClose: WS_CONNECTION_CLOSED,
  onMessage: WS_GET_MESSAGE,
};

const wsActionsUser = {
  wsInitUser: WS_CONNECTION_START_USER,
  onOpen: WS_CONNECTION_SUCCESS_USER,
  onError: WS_CONNECTION_ERROR_USER,
  onClose: WS_CONNECTION_CLOSED_USER,
  onMessage: WS_GET_MESSAGE_USER,
};

const enhancer = composeEnhancers(
  applyMiddleware(
    thunk,
    socketMiddleware(wsUrl, wsActions),
    socketMiddleware(wsUrl, wsActionsUser)
  )
);

export const store = createStore(rootReducer, enhancer);
