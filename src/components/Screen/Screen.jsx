import React from 'react';
import PropTypes from 'prop-types';
import { ScreenWrapper } from './Screen.styles';

const Screen = ({ currentNumber, isAnimated }) => (
  <ScreenWrapper isAnimated={isAnimated}>
    {currentNumber}
  </ScreenWrapper>
);

Screen.propTypes = {
  currentNumber: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  isAnimated: PropTypes.bool,
};

Screen.defaultProps = {
  currentNumber: '0',
  isAnimated: false,
};

export default Screen;
