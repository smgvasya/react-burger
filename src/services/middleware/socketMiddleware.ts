import { getCookie } from "../../utils/cookie";
import { updateToken } from "../actions/user";
import { MiddlewareAPI } from "redux";
import { MiddlewareTypes } from "../types/types";

export const socketMiddleware =
  (wsUrl: string, wsActions: MiddlewareTypes) => (store: MiddlewareAPI) => {
    let socket: WebSocket | null = null;

    return (next: any) => (action: { type: string }) => {
      const { dispatch } = store;
      const { type } = action;
      const { wsInit, wsInitUser, onOpen, onClose, onError, onMessage } =
        wsActions;

      if (type === wsInit) {
        socket = new WebSocket(`${wsUrl}/all`);
      }

      if (type === wsInitUser) {
        const accessToken = getCookie("accessToken");
        socket = new WebSocket(`${wsUrl}?token=${accessToken}`);
      }

      if (socket) {
        socket.onopen = (event: Event) => {
          dispatch({ type: onOpen, payload: event });
          console.log(`Соединение установлено`);
        };

        socket.onerror = (event: Event) => {
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = (event: MessageEvent) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;

          if (!success) {
            if (restParsedData.message === "Invalid or missing token") {
              socket?.close();
              updateToken(dispatch);
              dispatch({ type: wsInitUser });
            } else {
              dispatch({ type: onError });
            }
          }
          dispatch({ type: onMessage, payload: restParsedData });
        };

        socket.onclose = (event) => {
          dispatch({ type: onClose, payload: event });
        };

        if (type === onClose) {
          socket.close();
        }
      }

      next(action);
    };
  };
