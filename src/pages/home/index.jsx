import React from 'react';

import './styles.css';

import { Title } from '@/shared/ui';
import { GenerateTextForm, GenerateTextView } from '@/features/generate-text';

export const HomePage = () => (
  <div className="homepage">

    <Title>Tired of boring lorem ipsum?</Title>

    <GenerateTextForm />

    <GenerateTextView />

  </div>
);
