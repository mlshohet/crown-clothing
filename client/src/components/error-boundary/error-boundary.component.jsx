import React from 'react';

import {
	ErrorImageOverlay,
	ErrorImageContainer,
	ErrorImageText
} from './error-boundary.styles';

class ErrorBoundary extends React.Component {
	constructor() {
		super();

		this.state = {
			hasError: false
		};
	}

	//More important method, because the children error gets caught
	static getDerivedStateFromError(error) {
		// process the error

		return { hasErrored: true };
	}

	//Can be used to get info on the error
	componentDidCatch(error, info) {
		console.log(error);
	}

	render() {
		if(this.state.hasErrored) {
			return (
				<ErrorImageOverlay>
					<ErrorImageContainer imageUrl='https://i.imgur.com/yW2W9SC.png' />
					<ErrorImageText>Sorry, this page is broken</ErrorImageText>
				</ErrorImageOverlay>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;