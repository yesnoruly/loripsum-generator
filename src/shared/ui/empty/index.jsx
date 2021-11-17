import React from 'react';
import shmil from './assets/shmil.png';

import styled from 'styled-components';

export const Empty = () => (
  <StyledEmpty className="empty">
    <a href="https://t.me/addstickers/ShmelyaTheCat">
      <img
      src={shmil}
      loading="lazy"
      width="250" height="250" alt="Just shmil" />
    </a>
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
`;
