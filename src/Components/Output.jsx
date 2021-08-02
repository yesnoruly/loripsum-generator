import React from 'react';
// Styled
import styled, { css } from 'styled-components';

export const Output = (props) => <StyledOutput {...props}>{props.children}</StyledOutput>;

const StyledOutput = styled.section`
  background: #FFFFFF;
  box-shadow: 4px 4px 23px -3px rgba(0, 0, 0, 0.16);
  border-radius: 4px;

  padding: ${(props) => props.$p || '0'};
  margin-top: ${(props) => props.$mtop || '0'};
  height: ${(props) => props.$h || 'auto'};
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
