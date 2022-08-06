import * as React from 'react';

export default function BreedsMenu() {
  const [showBreedsMenu, setShowBreedsMenu] = React.useState<boolean>(false);

  const handleShowBreedsMenu = () => setShowBreedsMenu(!showBreedsMenu);
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