import styled from '@emotion/styled';

export const CalculatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 20px auto;
  min-height: 600px;
  border-radius: 25px;
  padding: 0 29px 20px;
  color: #fff;
  font-size: 20px;
  background-color: #071153;
  background: linear-gradient(
    222deg,
    rgba(66, 73, 124, 1) 35%,
    rgba(26, 30, 90, 1) 84%
  );
  box-shadow: 7px 54px 118px 0 #1f1d1d;
`;

export const ButtonList = styled.div``;
export const Row = styled.div`
  display: flex;
`;
export const Left = styled.div``;
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: ${props => (props.marginLeft ? props.marginLeft : '0')};
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;
