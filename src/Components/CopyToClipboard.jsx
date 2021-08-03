import React from 'react';
// Styled
import styled from 'styled-components';
// Icons
import copy from './icon/copy.svg';

export const CopyToClipboard = ({data}) => (
  <StyledCopyToClipboard onClick={() => navigator.clipboard.writeText(data)}>
    <img src={copy} alt="Copy to clipboard" />
  </StyledCopyToClipboard>
);

const StyledCopyToClipboard = styled.button`
  background-color: var(--color-grey-lightest);
  border-radius: 4px;
  border: 1px solid var(--color-grey-light);

  padding: 5px;
  margin: 5px;

  position: absolute;
  top: 0;
  left: 0;

  transition: background-color .3s ease;

  &:hover {
    background-color: var(--color-grey-medium);
  }

  &:active {
    background-color: var(--color-grey-dark);
  }
`;
