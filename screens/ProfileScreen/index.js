/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import Component from './component';

const ProfileScreen = (props) => {
  return <Component {...props} />;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
