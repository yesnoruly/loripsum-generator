import React from 'react';
// Styles
import './styles.css';
// Components
import { Title } from '@/shared/ui';
import { GenerateTextForm, GenerateTextView } from '@/features/generate-text';
import { Header } from '@/widgets/header';

export const HomePage = () => (
  <div className="homepage">

    <Header />

    <Title>Tired of boring lorem ipsum?</Title>

    <GenerateTextForm />

    <GenerateTextView />

  </div>
);
