import React from 'react';
import './index.css';

import { Title } from '@/shared/ui';
import { GenerateTextForm, GenerateTextView } from '@/features/generate-text';

export const HomePage = () => (
  <div className="homepage">

    <Title $alignment="center" $color="var(--color-blue-darker)">Tired of boring lorem ipsum?</Title>

    <GenerateTextForm $marginTop="31px" $grid $gap="12px"/>

    <GenerateTextView $padding="37px" $marginTop="24px" $height="550px" $gap="32px" $center/>

  </div>
);
