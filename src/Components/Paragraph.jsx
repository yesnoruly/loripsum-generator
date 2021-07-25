import React from 'react';
//Styled
import styled, {css} from 'styled-components';

export const Paragraph = (props) => {
    return <StyledParagraph {...props}>{props.children}</StyledParagraph>
}

const StyledParagraph = styled.p`
    font-size: ${props => props.$size || "14px"};
    line-height: 24px;

    color: ${props => props.$color || "dark"};

    ${props => props.$center && css`
      text-align: center;
    `};
`