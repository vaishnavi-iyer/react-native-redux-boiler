import { connect } from 'react-redux'
import PressMeButton from '../../components/PressMeButton/index'
import * as actions from '../../reducers/example/actions'

function mapStateToProps (state) {
  return {
    appState: state.appState
  }
}

function mapDispatchToProps (dispatch) {
  return {
    pressMeButtonClick: (url) => {
      dispatch(actions.pressMe(url))
    },
    reload: () => {
    	dispatch(actions.createAction(actions.RELOAD_APP))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PressMeButton)