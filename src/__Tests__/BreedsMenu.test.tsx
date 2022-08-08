import * as React from 'react';
import { screen, fireEvent } from '@testing-library/react';

import { renderWithRouter } from "./setupTests";
import { BreedsMenu } from '../pages/BreedsMenu';

describe('<BreedsMenu />', () => {
  it('renders a title  with text "Chihuahua"', () => {
    const route: string = '/chihuahua'
    renderWithRouter(
      <BreedsMenu />,
      { route }
    );
    const title = screen.getByText(/chihuahua/i);
    expect(title).toBeInTheDocument();
  });
  it('should not render a nav menu after mounted', async () => {
    const route: string = '/chihuahua'
    renderWithRouter(
      <BreedsMenu />,
      { route }
    );
    const menu = await screen.findByTestId('menu');
    expect(menu).not.toHaveClass('on');
  });
  it('renders a hamburger buuton', () => {
    const route: string = '/chihuahua'
    renderWithRouter(
      <BreedsMenu />,
      { route }
    );
    const button = screen.getByTestId(/hamburger-menu/i);
    expect(button).toBeInTheDocument();
  });

  it('should render a nav menu after clicking on button', async () => {
    const route: string = '/chihuahua'
    renderWithRouter(
      <BreedsMenu />,
      { route }
    );
    const button = screen.getByTestId(/hamburger-menu/i);
    fireEvent.click(button);

    const menu = await screen.findByTestId('menu');
    expect(menu).toBeInTheDocument();
  });
  it('should render four menu options after clicking on hamburger button', async () => {
    const route: string = '/chihuahua'
    renderWithRouter(
      <BreedsMenu />,
      { route }
    );
    const button = screen.getByTestId(/hamburger-menu/i);
    fireEvent.click(button);

    const options = await screen.findAllByTestId('breed');
    expect(options).toHaveLength(4);
  });
});