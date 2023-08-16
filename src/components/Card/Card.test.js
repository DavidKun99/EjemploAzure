import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Card from './Card';

describe('Card component', () => {
  const mockProps = {
    id_Pokemon: 1,
    name: 'pikachu',
    image: 'pikachu.jpg',
    types: ['electric'],
  };

  it('renders correctly with provided props', () => {
    render(
      <BrowserRouter>
        <Card {...mockProps} />
      </BrowserRouter>
    );

    const pokeNameElement = screen.getByText(/Pikachu/i);
    const typeElement = screen.getByText(/Electric/i);

    expect(pokeNameElement).toBeInTheDocument();
    expect(typeElement).toBeInTheDocument();
  });

});
