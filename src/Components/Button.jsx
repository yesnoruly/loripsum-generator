import React from 'react';
// Styled
import styled from 'styled-components';

export const Button = ({
  type, $color, $bgHover, $bgActive, $bg, children,
}) => (
  <StyledButton
    type={type}
    $color={$color}
    $bgHover={$bgHover}
    $bgActive={$bgActive}
    $bg={$bg}
  >
    { children }
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

  background: ${(props) => props.$bg || '#000000'};
  transition: background .2s ease;

  &:hover {
    background: ${(props) => props.$bgHover || '#666666'};
  }

  &:active {
    background: ${(props) => props.$bgActive || '#999'};
  }
`;
