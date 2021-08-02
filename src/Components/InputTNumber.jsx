import React from 'react';
// Styled
import styled from 'styled-components';

export const InputTNumber = (props) => (
  <StyledLabel $size={props.$size} $color={props.$color}>
    {props.labelText}
    <StyledInput {...props} />
  </StyledLabel>
);

const StyledLabel = styled.label`
  font-size: ${(props) => props.$size || '20px'};
  line-height: 23px;
  letter-spacing: 1.6px;
  color: ${(props) => props.$color || '#000000'};

  display: grid;
  grid-auto-flow: column;
  grid-template-columns: min-content;
  align-items: center;
  gap: 12px;
`;

const StyledInput = styled.input.attrs({
  type: 'number',
  step: 1,
})`
  height: 30px;
  max-width: 92px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${(props) => props.$size || '20px'};

  line-height: 14px;

  border-radius: 4px;
  padding: 0 5px;

  color: ${(props) => props.$color || '#000000'};
`;
