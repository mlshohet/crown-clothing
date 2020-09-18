import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_51HSnVNHz9R6W2v8YTuwk0lr9OfDaPWlazg4l65YjAslkWxY2rHXsFOqS6tj7qr6rDqBQflKSWZL43V7gJCxpbXQ5004hUZQvMT';

	const onToken = token => {
		console.log(token);
		alert('Payment successful');
	}

	return (
		<StripeCheckout 
			label='Pay Now'
			name='CROWN CLOTHING Ltd.'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;