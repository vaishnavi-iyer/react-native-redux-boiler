import defaultState from './defaultState'
import * as actions from './actions'

//function to deep clone the default state
function cloneState (state) {
  return {
  	appState : state.appState,
    drinksList : [...state.drinksList]
  }
}

const reducer = (state = defaultState, action) => {

  const newState = cloneState(state) //create a copy of state.

  switch (action.type) {

    case actions.FETCH_LIST_START:
      newState.appState = 'LOADING';
      return newState

    case actions.FETCH_LIST_ERROR:
      newState.appState = 'ERROR';
      return newState

    case actions.FETCH_LIST_SUCCESS:
      newState.appState = 'SUCCESS';
      newState.drinksList = action.payload;
      return newState

    case actions.RELOAD_APP:
      newState.appState = 'IDLE';
      newState.drinksList = [];
      return newState

    default:
      return state

  }
}

export default reducer