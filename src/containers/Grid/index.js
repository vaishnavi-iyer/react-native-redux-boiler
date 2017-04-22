import { connect } from 'react-redux'
import DrinksGrid from '../../components/Grid/index'
import * as actions from '../../reducers/example/actions'

function mapStateToProps (state) {
  return {
    appState : state.appState,
    drinksList : state.drinksList
  }
}

function mapDispatchToProps (dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrinksGrid)