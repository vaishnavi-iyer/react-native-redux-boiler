import React, { Component } from 'react';
import {
  Alert,
  View,
  Button,
  TouchableHighlight,
  ActivityIndicator,
  Text
} from 'react-native';
import styles from './PressMeButton.styles'

class PressMeButton extends Component {

  handleClick() {
    this.props.pressMeButtonClick('http://localhost:8080/drinks');
  }
  handleReload() {
    this.props.reload();
  }
   
  render() {
    var status = this.props.appState;
    return(
      <View>
      {
        (status === 'ERROR') 
        ? <View style={styles.container}>
            <Text style={styles.text}>Ops!! Something went wrong there.</Text>
            <Button
                onPress={() => this.handleReload()}
                title="Reload"
                accessibilityLabel="Reload the App"
              />
          </View> 
        :
          <View style={styles.container}>
            { 
              (status ==='IDLE') ? 
              <Button
                onPress={() => this.handleClick()}
                title="Press Me"
                accessibilityLabel="Load the Drinks List"
              /> :
              <Text style={styles.text}>Loading data..</Text>
            }    
          </View>
      }
      </View>
    )
  }
}
  
export default PressMeButton