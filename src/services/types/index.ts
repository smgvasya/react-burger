import { ThunkAction } from "redux-thunk";
import { Action, ActionCreator } from "redux";
import { store } from "../store";
import { IngredientsActions } from "../actions/burger-ingredients";
import { ConstructorActions } from "../actions/burger-constructor";
import { OrderActions } from "../actions/order-details";
import { SetTabAction } from "../actions/tabs-ingredients";

import { UserActions } from "../actions/user";
import { WsActions } from "../actions/wsActions";
import { WsActionsUser } from "../actions/wsActionsUser";

type ApplicationActions =
  | IngredientsActions
  | ConstructorActions
  | OrderActions
  | SetTabAction
  | UserActions
  | WsActions
  | WsActionsUser;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, Action, RootState, ApplicationActions>
>;
