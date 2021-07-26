import React from 'react';
//Styled
import styled from 'styled-components';

export const Title = (props) => {
    return (
        <StyledTitle {...props}>{props.children}</StyledTitle>
    )
}

const StyledTitle = styled.h2`
    font-weight: ${props => props.$weight || "bold"};
    font-size: 28px;
    line-height: 33px;
    text-transform: ${props => props.$transform || "uppercase"};

    color: ${props => props.$color || "#000000"};

    @media (max-width: 550px) {
        font-size: 25px;
    }

    text-align: ${props => props.$alignment || "left"};
`
