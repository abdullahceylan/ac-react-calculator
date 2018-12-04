import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper } from './Button.styles';

const Button = ({ onClick, id, value, ...rest }) => (
  <ButtonWrapper name={id} onClick={onClick} {...rest}>{value}</ButtonWrapper>
);

Button.propTypes = {
  onClick: PropTypes.func,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
