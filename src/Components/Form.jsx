import React from 'react';
// Styled
import styled, { css } from 'styled-components';

export const Form = ({
  onSubmit, $grid, $gap, $mtop, children,
}) => (
  <StyledForm
    onSubmit={onSubmit}
    $grid={$grid}
    $gap={$gap}
    $mtop={$mtop}
  >
    {children}
  </StyledForm>
);

const StyledForm = styled.form`
  margin-top: ${(props) => props.$mtop || '0'};

  ${(props) => props.$grid && css`
    display: grid;
    grid-auto-flow: ${props.$autoFlow || 'column'};
    justify-content: ${props.$jc || 'center'};
    align-items: ${props.$ai || 'center'};
    grid-gap: ${props.$gap || '0'};

    @media (max-width: 362px) {
      grid-auto-flow: row;
    }
  `}
`;
