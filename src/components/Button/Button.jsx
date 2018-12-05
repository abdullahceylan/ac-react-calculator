import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper } from './Button.styles';

const Button = ({ onClick, id, value, display, ...rest }) => (
  <ButtonWrapper name={id} onClick={onClick} {...rest}>{display ? display : value}</ButtonWrapper>
);

Button.propTypes = {
  onClick: PropTypes.func,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  display: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  display: '',
};

export default Button;
