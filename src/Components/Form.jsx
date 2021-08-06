import React from 'react';
// Styled
import styled, { css } from 'styled-components';

export const Form = ({
  onSubmit, $grid, $gap, $marginTop, children,
}) => (
  <StyledForm
    onSubmit={onSubmit}
    $grid={$grid}
    $gap={$gap}
    $marginTop={$marginTop}
  >
    {children}
  </StyledForm>
);

const StyledForm = styled.form`
  margin-top: ${(props) => props.$marginTop || '0'};

  ${(props) => props.$grid && css`
    display: grid;
    grid-auto-flow: ${props.$autoFlow || 'column'};
    justify-content: ${props.$justifyContent || 'center'};
    align-items: ${props.$alignItems || 'center'};
    grid-gap: ${props.$gap || '0'};

    @media (max-width: 362px) {
      grid-auto-flow: row;
    }
  `}
`;
