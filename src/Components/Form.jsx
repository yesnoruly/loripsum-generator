import React from 'react';
//Styled
import styled, {css} from 'styled-components';

export const Form = (props) => {
    return <StyledForm {...props}>{props.children}</StyledForm>
}

const StyledForm = styled.form`
    margin-top: ${props => props.$mtop || "0"};

    ${props => props.$grid && css`
        display: grid;
        grid-auto-flow: ${props => props.$autoFlow || "column"};
        justify-content: ${props => props.$jcontent || "center"};
        align-items: ${props => props.$jcontent || "center"};
        grid-gap: ${props => props.$gap || "0"};

        @media (max-width: 362px) {
            grid-auto-flow: row;
        }
    `}
`