import { createSelector } from 'reselect'; //Reselect library for memoization of selector state

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
	[selectCart],
	(cart) => cart.cartItems
); //this selector is now memoized

export const selectCartHidden = createSelector(
	[selectCart],
	(cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
	[selectCartItems],
	cartItems =>
		cartItems.reduce(
			(accumulatedQuantity, cartItem) =>
				accumulatedQuantity + cartItem.quantity,
				0
			)
)

export const selectCartTotal = createSelector(
	[selectCartItems],
	cartItems =>
		cartItems.reduce(
			(accumulatedQuantity, cartItem) =>
				accumulatedQuantity + cartItem.quantity * cartItem.price,
				0
			)
	)

