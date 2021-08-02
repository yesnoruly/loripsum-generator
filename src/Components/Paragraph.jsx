import React from 'react';
// Styled
import styled, { css } from 'styled-components';

export const Paragraph = (props) => <StyledParagraph {...props}>{props.children}</StyledParagraph>;

const StyledParagraph = styled.p`
  font-size: ${(props) => props.$size || '14px'};
  line-height: 24px;

  color: ${(props) => props.$color || '#000'};

  &:last-child {
    padding-bottom: 37px;
  }

  ${(props) => props.$center && css`
    text-align: center;
  `};
`;
