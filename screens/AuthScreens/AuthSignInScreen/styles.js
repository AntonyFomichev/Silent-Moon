import { StyleSheet, Dimensions } from 'react-native';
import { scaleX, scaleY } from 'constants/size';
import colors from 'constants/colors';

const FullWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  backgroundLinesStyle: {
    position: 'absolute',
    top: 0,
    width: FullWidth,
    height: scaleX * 428,
  },
  titleStyle: {
    marginBottom: scaleY * 33,
  },
  connectButtonContainerStyle: {
    marginBottom: scaleY * 20,
  },
  bodyContainerStyle: {
    marginBottom: scaleY * 40,
  },
  subtitleTextStyle: {
    marginBottom: scaleY * 40,
  },
  emailContainerStyle: {
    marginBottom: scaleY * 20,
  },
  passwordContainerStyle: {
    marginBottom: scaleY * 30,
  },
  formContainerStyle: {
    backgroundColor: colors.white,
  },
  submitButtonStyle: {
    marginBottom: scaleY * 20,
  },
  forgotContainerStyle: {
    marginBottom: scaleY * 33,
    flexDirection: 'row',
    alignSelf: 'center',
  },
});
