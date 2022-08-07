import * as React from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';

export default function BreedsMenu() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [showBreedsMenu, setShowBreedsMenu] = React.useState<boolean>(false);


  const [, breed] = pathname.split('/');

  const handleShowBreedsMenu = () => setShowBreedsMenu(!showBreedsMenu);

  const redirect = async ({ target }: any) => {
    const { innerText: breedName } = target as HTMLElement;
    navigate(`/${breedName.toLowerCase()}`)
  }

  return (
    <>
      <section
        className={showBreedsMenu ? 'menu on' : 'menu'}
      >
        <ul
          className={showBreedsMenu ? 'on' : ''}
        >
          <li
            onClick={redirect}
          >chihuahua</li>
          <li
            onClick={redirect}
          >husky</li>
          <li
            onClick={redirect}
          >labrador</li>
          <li
            onClick={redirect}
          >pug</li>
        </ul>
        <button
          className={showBreedsMenu ? 'hamburger-menu on' : 'hamburger-menu'}
          onClick={handleShowBreedsMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </section>
      <Outlet context={breed} />
    </>
  );
}