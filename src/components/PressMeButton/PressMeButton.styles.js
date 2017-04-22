import { Dimensions } from 'react-native'

const screenWidth = Dimensions.get('window').width

export default {
  container: {
    width: screenWidth,
    height: 60,
    backgroundColor: 'rgba(85, 207, 179, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontFamily: 'TrebuchetMS',
    fontSize: 22,
    alignSelf: 'center',
    fontWeight: '600',
    color: '#000',
  },
  button: {
    height: 60,
    width: screenWidth,
  },
  buttonText: {
    fontSize: 22,
    alignSelf: 'center',
    fontWeight: '600',
    color: '#000',
  }
}