export const FETCH_LIST_START= 'FETCH_LIST_START'
export const FETCH_LIST_SUCCESS= 'FETCH_LIST_SUCCESS'
export const FETCH_LIST_ERROR = 'FETCH_LIST_ERROR'
export const RELOAD_APP = 'RELOAD_APP'

export const pressMe = (url) => {
	return(dispatch, getState) =>{
		dispatch({ type : FETCH_LIST_START })
		fetch(decodeURI(url))
		    .then((response) => response.json())
		    .then((list) => {
		    	dispatch({
					type: FETCH_LIST_SUCCESS,
					payload: list.drinks
				})
			})
			.catch(function(err) {
				dispatch({
					type: FETCH_LIST_ERROR,
					payload: 'Unable to fetch the list'
				})
			});

	}	
}

export const createAction = (type) => ({
	type: type
})