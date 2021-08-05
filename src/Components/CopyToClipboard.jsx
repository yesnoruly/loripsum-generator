import React from 'react';
// Use clipboard
import useCopyClipboard from 'react-use-clipboard';
// Styled
import styled from 'styled-components';
// Icons
import copy from './icon/copy.svg';
import checkmark from './icon/checkmark.svg';

export const CopyToClipboard = ({ data }) => {
  const [isCopied, setCopied] = useCopyClipboard(data, {
    successDuration: 1000,
  });

  return (
    <StyledCopyToClipboard onClick={setCopied}>
      <img src={isCopied ? checkmark : copy} alt="Copy." />
    </StyledCopyToClipboard>
  );
};

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
