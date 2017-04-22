import React, { Component } from 'react'
import {
  View,
  Image,
  Text
} from 'react-native'
import { connect } from 'react-redux'
import styles from './App.styles.js'
import Topbar from '../../components/Topbar'
import PressMeButton from '../PressMeButton'
import Grid from '../Grid'

class App extends Component {

  render() {
    return (
      <View style={styles.container}>
      <Topbar />
      {(this.props.appState === 'SUCCESS') ? 
        <Grid />
       :
      <View>
        <PressMeButton />
        {
          (this.props.appState === 'ERROR') ? null :
          <View>
            <Image
              style={styles.image}
              resizeMode={'cover'}
              source={{ uri: 'https://unsplash.it/600/400/?random' }}
            /> 
            <Text
              style={styles.text}>
              Welcome to this React Native Redux boiler.
            </Text>
          </View>
        }
      </View>
      }
      </View>
    )
  }
}

function mapStateToProps (state) {
  return {
    appState: state.appState
  }
}


export default connect(mapStateToProps)(App)