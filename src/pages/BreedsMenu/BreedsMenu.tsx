import * as React from 'react';
import Grid from '@mui/material/Grid';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';

import { fetchBreedList } from '../../API/list';

export default function BreedsMenu() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [showBreedsMenu, setShowBreedsMenu] = React.useState<boolean>(false);
  const [breedPictures, setPictures] = React.useState<
    { breed: string, list: string[] }
  >({ breed: '', list: [] });

  const [, breed] = pathname.split('/');

  const { list: picturesArr } = breedPictures;

  const handleShowBreedsMenu = () => setShowBreedsMenu(!showBreedsMenu);

  const getBreedList = React.useCallback(async () => {
    const data = await fetchBreedList(breed);
    setPictures(data);
  }, [breed]);


  const redirect = async ({ target }: any) => {
    const { innerText: breedName } = target as HTMLElement;
    navigate(`/${breedName.toLowerCase()}`)
  }

  React.useEffect(() => {
    getBreedList();
  }, [getBreedList]);

  return (
    <>
      <section
        className='menu'
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
          className='hamburger-menu'
          onClick={handleShowBreedsMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </section>
      <Grid
        container
      >
        <Grid
          container
          id='cards-container'
          columnGap={0}
          rowGap={2}
        >
          <Outlet context={breed} />
          {
            picturesArr.map((picture, i) => (
              <Grid
                item
                key={i}
                xs={12}
                sm={4}
                md={3}
                lg={3}
              >
                <div
                  className='thumb'
                  style={{
                    backgroundImage: 'url(' + picture + ')',
                  }}
                >
                </div>
              </Grid>
            ))
          }
        </Grid>
      </Grid>
    </>
  );
}