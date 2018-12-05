import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const ScreenWrapper = styled.div`
  display: block;
  font-size: 101px;
  margin: 4px 0 22px;
  width: 100%;
  height: auto;
  min-height: 136px;
  overflow: hidden;
  word-wrap: break-word;
  text-align: right;
  animation: ${props => (props.isAnimated ? `1s ${fadeInRight} ease` : 'none')};
`;
