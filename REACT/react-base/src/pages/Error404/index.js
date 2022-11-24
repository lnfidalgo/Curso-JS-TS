import React from 'react';
import { ErrorContainer } from './styled';

export default function Error404() {
  return (
    <ErrorContainer>
      <h1>404</h1>
      <p>Esta página não existe.</p>
    </ErrorContainer>
  );
}
