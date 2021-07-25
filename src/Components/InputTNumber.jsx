import React from 'react';
//Styled
import styled from 'styled-components';

export const InputTNumber = (props) => {
    return (
        <StyledLabel $color={props.$color}>
            {props.labelText}
            <StyledInput {...props}/>
        </StyledLabel>
    )
}

const StyledLabel = styled.label`
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 1.6px;
    color: ${props => props.$color || "dark"};

    display: grid;
    grid-auto-flow: column;
    grid-template-columns: min-content;
    align-items: center;
    gap: 12px;
`

const StyledInput = styled.input.attrs({
    type: "number",
    min: 1,
    max: 999,
    step: 1,
})`
    height: 30px;
    max-width: 92px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 20px;
    line-height: 14px;

    border-radius: 4px;
    padding: 0 5px;

    color: ${props => props.$color || "dark"};
`