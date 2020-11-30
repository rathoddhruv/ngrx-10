import { Cart } from '../models/cart';
import { CartActionTypes } from '../actions/cart.actions';
import { createSelector } from '@ngrx/store';

export interface CartState {
    cart: Cart;
}

const initialCartState: CartState = {
    cart: new Cart({
    })
};

export function cartReducer(cartState = initialCartState, action): CartState {
    console.log('prev state: ', cartState);
    switch (action.type) {
        case CartActionTypes.ACTION_SET:
            
            return {
                cart: new Cart(action.payload)
            };

        case CartActionTypes.ACTION_RESET:
            return {
                cart: new Cart({})
            };
    }
    return cartState;
}

export const selectCartState = (state) => state.cartState;
export const selectCart = createSelector(selectCartState, (state) => state.cart);
