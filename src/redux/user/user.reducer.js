import UserActionTypes from './user.types';

const INITIAL_STATE = {
	 currentUser: null,
	 error: null
}

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
		case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
			return {
				...state,
				currentUser: action.payload,
				error: null // clear all errors on successful sign in
			};
		case UserActionTypes.GOOGLE_SIGN_IN_FAIL:
		case UserActionTypes.EMAIL_SIGN_IN_FAIL:
			return {
				...state,
				error: action.payload
			};
		default:
			return state;
	}
}

export default userReducer;