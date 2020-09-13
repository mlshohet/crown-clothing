//functions that return objects of correct format

export const setCurrentUser = user => ({
	type: 'SET_CURRENT_USER',
	payload: user
})