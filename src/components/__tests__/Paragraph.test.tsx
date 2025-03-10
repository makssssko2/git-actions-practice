import { describe, test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import * as React from 'react';

import Paragraph from '../Paragraph.tsx';

describe('Paragraph', () => {
  test('renders the paragraph with the correct text', () => {
    render(<Paragraph text="Собака" />);
    const paragraphElement = screen.getByText(/Собака/i);
    expect(paragraphElement).toBeInTheDocument();
  });
});
