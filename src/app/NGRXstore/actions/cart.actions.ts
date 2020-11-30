import { Action } from '@ngrx/store';
import { Cart } from '../models/cart';

export enum CartActionTypes {
  ACTION_SET = '[Cart] Set',
  ACTION_RESET = '[Cart] Reset',
}

export class CartSet implements Action {
  readonly type = CartActionTypes.ACTION_SET;
  constructor(public payload: { cart: Cart }) {}
}

export class CartReset implements Action {
  readonly type = CartActionTypes.ACTION_RESET;
}
