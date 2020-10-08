import { takeLatest, put, all, call } from 'redux-saga/effects';
import UserActionTypes from './user.types';

import { signInSuccess, signInFail, signOutSuccess, signOutFail } from './user.actions';

import { 
	auth,
	googleProvider,
	createUserProfileDocument,
	getCurrentUser
} from '../../firebase/firebase.utils';

export function* getSnapshotFromUserAuth(userAuth) {
	try {
		const userRef = yield call(createUserProfileDocument, userAuth);
		const userSnapshot = yield userRef.get();
		yield put(signInSuccess({
			id: userSnapshot.id,
			...userSnapshot.data()
		}));
	} catch(error) { 
		yield put(signInFail(error));
	}
}

//This is the main API call
export function* signInWithGoogle() {
	try {
		const {user} = yield auth.signInWithPopup(googleProvider);
		yield getSnapshotFromUserAuth(user);
	} catch(error) { 
		yield put(signInFail(error));
	}
}

export function* signInWithEmail({payload: { email, password }}) {
	try	{
		const { user } = yield auth.signInWithEmailAndPassword(email, password);
		yield getSnapshotFromUserAuth(user);
	} catch(error) {
		yield put(signInFail(error));
	}
}

export function* isUserAuthenticated() {
	try {
		const userAuth = yield getCurrentUser();
		if (!userAuth) return;
		yield getSnapshotFromUserAuth(userAuth);
	} catch(error) {
		yield put(signInFail(error));
	}
}

export function* signOut() {
	try {
		yield auth.signOut();
		yield (put(signOutSuccess()))
	} catch(error) {
		yield put(signOutFail(error))
	}
}

export function* onGoogleSignInStart() {
	yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmaiSignInStart() {
	yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onCheckUserSession() {
	yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart() {
	yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* userSagas() {
	yield all([
		call (onGoogleSignInStart),
		call (onEmaiSignInStart),
		call (onCheckUserSession),
		call (onSignOutStart)
	]);
}



