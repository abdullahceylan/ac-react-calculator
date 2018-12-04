import React from 'react';
import PropTypes from 'prop-types';
import { ScreenWrapper } from './Screen.styles';

const Screen = ({ currentNumber }) => (
  <ScreenWrapper>
    {currentNumber}
  </ScreenWrapper>
);

Screen.propTypes = {
  currentNumber: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Screen.defaultProps = {
  currentNumber: '0',
};

export default Screen;
