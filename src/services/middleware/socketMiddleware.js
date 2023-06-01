import { getCookie } from "../../utils/cookie";
import { updateToken } from "../actions/user";

export const socketMiddleware = (wsUrl, wsActions) => {
  return (store) => {
    let socket = null;

    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const {
        wsInit,
        wsInitUser,
        wsSendUser,
        onOpen,
        onClose,
        onError,
        onMessage,
      } = wsActions;

      if (type === wsInit) {
        socket = new WebSocket(`${wsUrl}/all`);
      }

      if (type === wsInitUser) {
        socket = new WebSocket(`${wsUrl}?token=${getCookie("accessToken")}`);
      }

      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: onOpen, payload: event });
          console.log(`Соединение установлено`);
        };

        socket.onerror = (event) => {
          dispatch({ type: onError, payload: event });
          console.log(`Ошибка ${event.message}`);
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;

          if (!success) {
            if (
              restParsedData.message === "Invalid or missing token" ||
              restParsedData.message === "jwt expired"
            ) {
              socket.close();
              return updateToken(dispatch)
                .then(() => {
                  dispatch({ type: wsInitUser });
                })
                .catch((err) => {
                  console.log(`Ошибка подключения: ${err}`);
                });
            } else {
              dispatch({ type: onError });
            }
          }
          dispatch({ type: onMessage, payload: restParsedData });
        };

        socket.onclose = (event) => {
          dispatch({ type: onClose, payload: event });
        };

        if (type === wsSendUser) {
          const message = payload;
          socket.send(JSON.stringify(message));
        }
      }

      next(action);
    };
  };
};
