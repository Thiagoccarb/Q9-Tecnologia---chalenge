import * as React from 'react';

import { fetchBreedList } from '../../API/list';

export default function BreedsMenu() {
  const [showBreedsMenu, setShowBreedsMenu] = React.useState<boolean>(false);
  const [breedPictures, setPictures] = React.useState<string[]>([]);

  const handleShowBreedsMenu = () => setShowBreedsMenu(!showBreedsMenu);

  const getBreedsList = async () => {
    const data = await fetchBreedList();
    setPictures(data);
  }

  React.useEffect(() => {
    getBreedsList();
  }, []);

  return (
    <section
      className='menu'
    >
      <ul
        className={showBreedsMenu ? 'on' : ''}
      >
        <li>chihuahua</li>
        <li>husky</li>
        <li>labrador</li>
        <li>pug</li>
      </ul>
      <button
        className='hamburger-menu'
        onClick={handleShowBreedsMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </section>
  );
}