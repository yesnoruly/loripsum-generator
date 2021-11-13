import React from 'react';
import './index.css';

import { useStore } from 'effector-react';

import {
  Title, Output, Loader, Paragraph,
} from '../../shared/ui';
import {
  $textContent, $textContentJoined, getTextContentFx, GenerateText,
} from '../../features/generate-text';
import { CopyToClipboard } from '../../features/copy-to-clipboard';

export const Home = () => {
  const textContent = useStore($textContent);
  const isLoading = useStore(getTextContentFx.pending);
  const textContentJoined = useStore($textContentJoined);

  return (
    <div className="home">

      <Title $alignment="center" $color="var(--color-blue-darker)">Tired of boring lorem ipsum?</Title>

      <GenerateText $marginTop="31px" $grid $gap="12px" />

      <Output $padding="37px" $marginTop="24px" $height="550px" $gap="32px" $center>

        <CopyToClipboard data={textContentJoined} />

        {
          isLoading
            ? <Loader $width="5px" $color="var(--color-blue-light)" />
            : (
              textContent.length > 0
                ? textContent.map((item, index) => (
                  <Paragraph
                    key={index}
                    $center
                    $size="20px"
                    $color="var(--color-blue-dark)"
                  >
                    {item}
                  </Paragraph>
                ))
                : <p className="empty">😎</p>
            )
        }

      </Output>

    </div>
  );
};
