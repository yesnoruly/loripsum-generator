import React from 'react';

import styled from 'styled-components';

import copy from './assets/copy.svg';
import checkmark from './assets/checkmark.svg';

export const CopyClipboard = ({ isCopied, setCopied }) => (
    <StyledCopyClipboard onClick={setCopied}>
      <img src={isCopied ? checkmark : copy} alt="" />
    </StyledCopyClipboard>
);

const StyledCopyClipboard = styled.button`
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
  & img {
    width: 25px;
    height: 25px;
  }
`;
