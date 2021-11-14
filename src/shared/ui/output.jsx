import React from 'react';
// Styled
import styled, { css } from 'styled-components';

export const Output = ({
  $padding, $gap, $center, $height, $marginTop, children,
}) => (
  <StyledOutput
    $padding={$padding}
    $gap={$gap}
    $center={$center}
    $height={$height}
    $marginTop={$marginTop}
  >
    {children}
  </StyledOutput>
);

const StyledOutput = styled.section`
  background: #FFFFFF;
  box-shadow: 4px 4px 23px -3px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  padding: ${(props) => props.$padding || '0'};
  margin-top: ${(props) => props.$marginTop || '0'};
  height: ${(props) => props.$height || 'auto'};
  overflow-y: auto;
  display: grid;
  gap: ${(props) => props.$gap || '0'};
  ${(props) => props.$center && css`
    justify-content: center;
  `}
  position: relative;
  @media (max-width: 666px) {
    height: 400px;
    margin-top: 15px;
    padding: 20px;
  }
`;
