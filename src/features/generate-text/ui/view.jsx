import React from 'react';

import { useStore } from 'effector-react';

import { $textContent, $textContentJoined, getTextContentFx } from '../model';

import { Empty, Loader, Output, Paragraph } from '@/shared/ui';
import { CopyClipboard } from '@/shared/lib';

export const GenerateTextView = (props) => {

  const textContent = useStore($textContent);
  const isLoading = useStore(getTextContentFx.pending);
  const textContentJoined = useStore($textContentJoined);

  return (
    <Output {...props}>

      <CopyClipboard data={textContentJoined} />

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
              : <Empty />
          )
      }

    </Output>
  )
}
