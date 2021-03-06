import { StyleSheet } from 'react-native';
import { scaleX, scaleY, FullHeight, FullWidth } from 'constants/size';
import colors from 'constants/colors';

export default StyleSheet.create({
  screenLayoutStyle: {
    backgroundColor: colors.music,
  },
  screenLayoutSleepStyle: {
    backgroundColor: colors.blue,
  },
  imageBackgroundStyle: {
    position: 'absolute',
    height: FullHeight,
    width: FullWidth,
    right: 0,
    top: 0,
    flex: 1,
  },
  headerButtonContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scaleY * 50,
    paddingHorizontal: scaleX * 20,
    flex: 1,
  },
  spaceBetweenStyle: {
    marginRight: scaleX * 15,
    opacity: 0.5,
  },
  downloadButtonStyle: {
    opacity: 0.5,
  },
  innerHeaderContainerStyle: {
    flexDirection: 'row',
  },
  controlContainerStyle: {
    flexDirection: 'row',
    paddingHorizontal: scaleX * 24,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: scaleY * 52,
  },
  variableContainerStyle: {
    paddingHorizontal: scaleX * 20,
    flex: 2,
  },
  titlePlayerContainerStyle: {
    marginBottom: scaleY * 70,
  },
  titlePlayerStyle: {
    marginBottom: scaleY * 15.37,
  },
  moveImageStyle: {
    width: scaleX * 40,
    height: scaleX * 40,
  },
  playButtonImageStyle: {
    width: scaleY * 20,
    height: scaleY * 25,
  },
  playButtonStyle: {
    width: scaleX * 88,
    height: scaleX * 88,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scaleX * 88,
    borderWidth: 7,
    borderColor: colors.border,
  },
  timelineStyle: {
    height: 2,
    width: scaleX * 333,
    alignSelf: 'center',
    marginBottom: scaleY * 20,
  },
  timeContainerStyle: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  thumbStyle: {
    height: 25,
    width: 25,
    borderWidth: 4,
    borderColor: colors.border,
    borderRadius: 50,
  },
  thumbTouchSizeStyle: {
    width: 50,
    height: 50,
  },
});
