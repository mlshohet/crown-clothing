import UserActionTypes from './user.types';

//functions that return objects of correct format

export const setCurrentUser = user => ({
	type: UserActionTypes.SET_CURRENT_USER,
	payload: user
});

export const googleSignInStart = () => ({
	type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const googleSignInSuccess = user => ({
	type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
	payload: user
});

export const googleSignInFail = error => ({
	type: UserActionTypes.EMAIL_SIGN_IN_FAIL,
	payload: error
});

export const emailSignInStart = emailAndPassword => ({
	type: UserActionTypes.EMAIL_SIGN_IN_START,
	payload: emailAndPassword
});

export const emailSignInSuccess = user => ({
	type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
	payload: user
});

export const emailSignInFail = error => ({
	type: UserActionTypes.EMAIL_SIGN_IN_FAIL,
	payload: error
});



