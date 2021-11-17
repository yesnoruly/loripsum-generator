import React from 'react';

import { useStore } from 'effector-react';

import { $textContent, $textContentJoined, getTextContentFx } from '../model';

import { CopyToClipboard, Empty, Loader, Output, Paragraph } from '@/shared/ui';
import { useCopyClipboard } from '@/shared/lib';

export const View = (props) => {

  const textContent = useStore($textContent);
  const isLoading = useStore(getTextContentFx.pending);
  const textContentJoined = useStore($textContentJoined);

  const [isCopied, setCopied] = useCopyClipboard(textContentJoined, {
    successDuration: 1500
  });

  return (
    <Output {...props}>

      <CopyToClipboard setCopied={setCopied} isCopied={isCopied} />

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
