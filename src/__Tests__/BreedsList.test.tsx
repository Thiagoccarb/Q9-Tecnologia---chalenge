import * as React from 'react';
import { screen } from '@testing-library/react';
import * as rrd from 'react-router-dom';

import { BreedList } from '../pages/BreedsMenu';
import { renderWithRouter } from "./setupTests";

describe('<BreedList />', () => {

  it('should render all images returned from api', async () => {

    let mockData = { data: { breed: 'chihuahua', showBreedsMenu: false } };
    const mockedUseOutlet = jest.fn(() => mockData);

    jest.spyOn(rrd, 'useOutletContext').mockImplementation(mockedUseOutlet)

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({
          breed: "chihuahua",
          list: [
            'https://images.dog.ceo/breeds/chihuahua/n02085620_10074.jpg',
            'https://images.dog.ceo/breeds/chihuahua/n02085620_10131.jpg',
          ],
        }),
      })
    ) as jest.Mock;

    const route: string = '/chihuahua'
    renderWithRouter(
      <BreedList />,
      { route }
    );

    const cards = await screen.findAllByTestId('card');
    expect(cards).toHaveLength(2);
  });
});