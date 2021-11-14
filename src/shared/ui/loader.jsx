import React from 'react';
// Styled
import styled, { keyframes } from 'styled-components';

export const Loader = ({ $width, $color }) => (
  <StyledLoader $width={$width} $color={$color} />
);

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledLoader = styled.span`
  display: inline-flex;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  animation: ${rotation} 1s linear infinite;
  transition: .5s ease;
  border: ${(props) => props.$width || '3px'} solid ${(props) => props.$background || '#000'};
  border-bottom-color: ${(props) => props.$color || '#666'};
`;
