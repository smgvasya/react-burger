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
  readonly _id: string;
  readonly owner: UserTypes;
  readonly price: number;
  readonly ingredients: IngredientTypes;
  readonly name?: string;
  id?: string;
};

export type UserTypes = {
  email: string;
  name: string;
};

export type WsActionsTypes = {
  orders: OrderTypes[];
  total?: number | null;
  totalToday?: number | null;
};
