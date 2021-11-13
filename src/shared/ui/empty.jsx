import React from 'react';

import styled from 'styled-components';

export const Empty = () => (
  <StyledEmpty className="empty">
    <a href="https://t.me/addstickers/ShmelyaTheCat"><img
      src="https://user-images.githubusercontent.com/64963734/141657081-90547c0c-52ee-4321-a6a0-fb78c5a21dde.png"
      width="250" height="250" alt="Just shmil" /></a>
  </StyledEmpty>
);

const StyledEmpty = styled.div`
  color: #617D98;
  text-align: center;
  font-size: 30px;
  line-height: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    cursor: default;
  }
`
