import styled from '@emotion/styled';

export const ButtonWrapper = styled.button`
  font-family: 'Nunito';
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-size: 40px;
  border: none;
  border-radius: ${props =>
    props.isOval ? '50%' : props.isLong ? '41px' : '0'};
  padding: ${props => (props.isOval ? '7px' : '0')};
  width: ${props => (props.isOval ? '85px' : '90px')};
  height: ${props => (props.isOval ? '85px' : props.isLong ? '175px' : '90px')};
  margin-bottom: 10px;
  margin-right: ${props => (props.noMargin ? '0' : '6px')};
  &:last-child {
    margin-right: 0;
  }
  color: ${props => (props.textColor ? props.textColor : '#fff')};
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : 'transparent'};
  background-image: ${props =>
    props.backgroundColor
      ? `linear-gradient(to bottom, ${props.backgroundColor}, #fd6c1b)`
      : 'none'};
`;
