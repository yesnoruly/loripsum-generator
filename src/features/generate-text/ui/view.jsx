import React from 'react';

import { useStore } from 'effector-react';

import { $textContent, $textContentJoined, getTextContentFx } from '../model';

import {
  Empty, Loader, Output, Paragraph,
} from '@/shared/ui';
import { CopyClipboard } from '@/shared/lib';

export const GenerateTextView = () => {
  const textContent = useStore($textContent);
  const isLoading = useStore(getTextContentFx.pending);
  const textContentJoined = useStore($textContentJoined);

  return (
    <Output>

      <CopyClipboard data={textContentJoined} />

      {
        isLoading
          ? <Loader />
          : (
            textContent.length > 0
              ? textContent.map((item, index) => (
                <Paragraph key={index}>
                  {item}
                </Paragraph>
              ))
              : <Empty />
          )
      }

    </Output>
  );
};
