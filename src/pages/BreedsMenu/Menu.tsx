import * as React from 'react';
import Grid from '@mui/material/Grid';

import { fetchBreedList } from '../../API/list';

export default function BreedsMenu() {
  const [showBreedsMenu, setShowBreedsMenu] = React.useState<boolean>(false);
  const [breedPictures, setPictures] = React.useState<
    { breed: string, list: string[] }
  >({ breed: '', list: [] });

  const { list: picturesArr } = breedPictures;

  const handleShowBreedsMenu = () => setShowBreedsMenu(!showBreedsMenu);

  const getBreedsList = async () => {
    const data = await fetchBreedList();
    setPictures(data);
  }

  React.useEffect(() => {
    getBreedsList();
  }, []);

  return (
    <>
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
      <Grid
        container
        id='cards-container'
        columnGap={0}
        rowGap={2}
      >
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
    </>
  );
}