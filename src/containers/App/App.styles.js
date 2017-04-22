import { Dimensions } from '../../common/react'

export default {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: Dimensions.width,
    height: Dimensions.height,
  },
  image: {
    width: 350,
    height: 200,
    paddingTop: 0,
    margin: 0,
    alignSelf: 'center',
  },
  text: {
  	color: 'black',
    fontSize: 24,
    fontWeight: 'normal',
    fontFamily: 'Helvetica Neue',
    textAlign: 'center',
  },
}
