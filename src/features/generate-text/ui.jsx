import React, { useState } from 'react';

import { Button, Form, InputNumber } from '@/shared/ui';
import { getTextContentFx } from './model';

export const GenerateText = (props) => {
  const [input, setInput] = useState('1');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    getTextContentFx(input);
  };

  return (
    <Form onSubmit={handleSubmit} {...props}>

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
  );
};
