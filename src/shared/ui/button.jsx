import React from 'react';
// Styled
import styled from 'styled-components';

export const Button = ({
  type,
  $color,
  $backgroundHover,
  $backgroundActive,
  $background,
  children,
}) => (
  <StyledButton
    type={type}
    $color={$color}
    $backgroundHover={$backgroundHover}
    $backgroundActive={$backgroundActive}
    $background={$background}
  >
    {children}
  </StyledButton>
);

const StyledButton = styled.button`
  display: inline-block;
  min-width: 110px;
  min-height: 35px;
  padding: 10px;
  border-radius: 4px;
  font-size: 20px;
  line-height: 14px;
  color: ${(props) => props.$color || '#FFFFFF'};
  background: ${(props) => props.$background || '#000000'};
  transition: background .2s ease;

  &:hover {
    background: ${(props) => props.$backgroundHover || '#666666'};
  }

  &:active {
    background: ${(props) => props.$backgroundActive || '#999'};
  }
`;
