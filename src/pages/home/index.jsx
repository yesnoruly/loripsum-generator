import React, { useState } from 'react';
import './index.css';

import { useStore } from 'effector-react';

import { CopyToClipboard } from '../../features/copy-to-clipboard';
import { InputNumber } from '../../shared/ui';
import { Button } from '../../shared/ui';
import { Title } from '../../shared/ui';
import { Output } from '../../shared/ui';
import { Form } from '../../shared/ui';
import { Loader } from '../../shared/ui';
import { Paragraph } from '../../shared/ui';

import { $textContent, $textContentJoined, getTextContentFx } from '../../entities/text';

export const Home = () => {
  const textContent = useStore($textContent);
  const isLoading = useStore(getTextContentFx.pending);
  const textContentJoined = useStore($textContentJoined);

  const [input, setInput] = useState('1');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    getTextContentFx(input);
  };

  return (
    <div className="app">

      <Title $alignment="center" $color="var(--color-blue-darker)">Tired of boring lorem ipsum?</Title>

      <Form onSubmit={handleSubmit} $marginTop="31px" $grid $gap="12px">

        <InputNumber
          labelText="Paragraphs:"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          min={1}
          max={999}
          $color="var(--color-blue-darker)"
        />

        <Button
          type="submit"
          $color="#FFFFFF"
          $background="var(--color-blue-medium)"
          $backgroundHover="var(--color-blue-lightest)"
          $backgroundActive="var(--color-blue-darker)"
        >
          Generate
        </Button>
      </Form>

      <Output $padding="37px" $marginTop="24px" $height="550px" $gap="32px" $center>

        <CopyToClipboard data={textContentJoined}/>

        {
          isLoading
            ? <Loader $width="5px" $color="var(--color-blue-light)"/>
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
