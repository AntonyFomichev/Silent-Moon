import React from 'react';
import PropTypes from 'prop-types';
import { Text as RNText } from 'react-native';
import colors from 'constants/colors';

import styles from './styles';

export const Text = (props) => (
  <RNText
    {...props}
    style={[
      styles.container,
      styles[props.size],
      styles[`color_${props.color}`],
      styles[props.weight],
      styles[props.align],
      styles[props.transform],
      styles[props.family],
      props.style,
    ]}
  />
);

Text.propTypes = {
  style: PropTypes.any,
  size: PropTypes.oneOf([
    'sz11',
    'sz12',
    'sz14',
    'sz16',
    'sz18',
    'sz20',
    'sz24',
    'sz28',
    'sz30',
    'sz34',
    'sz36',
  ]),
  color: PropTypes.oneOf(Object.keys(colors)),
  weight: PropTypes.oneOf([
    'thin',
    'ultraLight',
    'light',
    'regular',
    'medium',
    'bold',
    'heavy',
    'semiBold',
    'black',
  ]),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  transform: PropTypes.oneOf(['uppercase']),
  family: PropTypes.oneOf(['Garamond-SemiBold']),
};

Text.defaultProps = {
  size: 'sz12',
  color: 'black',
  weight: 'regular',
  align: 'left',
};
