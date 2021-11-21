import React, { useState } from 'react';
// Components
import { Button, Form, InputNumber } from '@/shared/ui';
// Model
import { getTextContentFx } from '../model';

export const GenerateTextForm = () => {
  const [input, setInput] = useState('1');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    getTextContentFx(input);
  };

  return (
    <Form onSubmit={handleSubmit}>

      <InputNumber
        htmlFor="Generate text"
        labelText="Paragraphs:"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        min={1}
        max={999}
      />

      <Button type="submit">Generate</Button>
    </Form>
  );
};
