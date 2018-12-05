import React from 'react';
import PropTypes from 'prop-types';
import { LastOperationWrapper } from './LastOperation.styles';

const LastOperation = ({ operation, isAnimated }) => (
  <LastOperationWrapper isAnimated={isAnimated}>
    {operation}
  </LastOperationWrapper>
);

LastOperation.propTypes = {
  operation: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  isAnimated: PropTypes.bool,
};

LastOperation.defaultProps = {
  operation: '',
  isAnimated: false,
};

export default LastOperation;
