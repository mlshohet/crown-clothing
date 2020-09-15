import { createSelector } from 'reselect'; //Reselect library for memoization of selector state

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
	[selectCart],
	(cart) => cart.cartItems
); //this selector is now memoized

export const selectCartItemsCount = createSelector(
	[selectCartItems],
	cartItems =>
		cartItems.reduce(
			(accumulatedQuantity, cartItem) =>
				accumulatedQuantity + cartItem.quantity,
				0
			)
)