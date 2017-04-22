import { Dimensions } from 'react-native'

const {height, width} = Dimensions.get('window');

export default {
  container:{
    paddingTop: 10,
    paddingBottom: 10,
    flex: -1,
  },
  drinkName:{
    textAlign:'center',
    textDecorationLine: 'underline',
    width: width/2,
  },
  image: {
    height: width/2 - 10,
    width: width/2 - 10,
    margin: 5,
    borderWidth: 1,
    borderColor: 'black',
    resizeMode:'cover',
  },
  list: {
    paddingTop: 10,
    marginTop: 50,
    paddingBottom:10,
    flex:1,
  },
}

