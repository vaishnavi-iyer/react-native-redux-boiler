import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';
import Grid from 'react-native-grid-component';

import styles from './Grid.styles'

export default class DrinksGrid extends Component {

  _renderItem = (data, i) =>
    <View style={styles.container}key={i}>
      <Image source={{uri: data.strDrinkThumb}} style={styles.image} key={'Image_'+i} />
      <Text style={styles.drinkName} key={'Text_'+i}> {data.strDrink} </Text>
    </View>

  render() {
    // console.log(this.props.drinksList.map((item, i)=> decodeURI(item.strDrinkThumb)));
    return (
      <View style={styles.list}>
      <Grid
        renderItem={this._renderItem}
        data={this.props.drinksList}
        itemsPerRow={4}
      />
      </View>
    );
  }
}