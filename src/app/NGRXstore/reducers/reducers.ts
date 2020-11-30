import { ActionReducerMap } from "@ngrx/store";
import { cartReducer, CartState } from "./cart.reducer";

interface AppState {
  cartState: CartState;
}

export const reducers: ActionReducerMap<AppState> = {
  cartState: cartReducer
};
