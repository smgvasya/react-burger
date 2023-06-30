export type IngredientTypes = {
  readonly _id: string;
  readonly name: string;
  readonly type: "bun" | "main" | "sauce";
  readonly proteins: number;
  readonly fat: number;
  readonly carbohydrates: number;
  readonly calories: number;
  readonly price: number;
  readonly image: string;
  readonly image_mobile: string;
  readonly image_large: string;
  readonly __v: number;
  id?: string;
};

export type OrderTypes = {
  readonly number: number;
  readonly status: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly _id: string;
  readonly owner: UserTypes;
  readonly ingredients: string[];
  readonly name: string;
};

export type UserTypes = {
  email: string;
  name: string;
};

export type UserFormTypes = {
  name: string;
  email: string;
  password: string;
};

export type LoginFormTypes = {
  email: string;
  password: string;
};

export type UpdatePwdFormTypes = {
  email: string;
};

export type submitPwdTypes = {
  token: string;
  password: string;
};

export type WsActionsTypes = {
  orders: OrderTypes[];
  total: number | null;
  totalToday: number | null;
};

export type TokenTypes = {
  success: boolean;
  accessToken: string;
  refreshToken: string;
};

export type MiddlewareTypes = {
  wsInit?: string;
  wsInitUser?:  string;
  onOpen: string;
  onClose: string;
  onError: string;
  onMessage: string;
};
