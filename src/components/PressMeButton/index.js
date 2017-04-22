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
   
  render() {
    var status = this.props.appState;
    return(
      <View>
      {
        (status === 'ERROR') ? null :
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