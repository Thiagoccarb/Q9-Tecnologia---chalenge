import * as React from 'react';
import Grid from '@mui/material/Grid';
import { useOutletContext } from 'react-router-dom';

import { fetchBreedList } from '../../API/list';

export default function BreedList() {
  const breed = useOutletContext<string>();
  const [displayOverlay, setOverlay] = React.useState<boolean>(false);
  const [breedPictures, setPictures] = React.useState<
    { breed: string, list: string[] }
  >({ breed: '', list: [] });

  const { list: picturesArr } = breedPictures;

  const getBreedList = React.useCallback(async () => {
    const data = await fetchBreedList(breed);
    setPictures(data);
  }, [breed]);

  const openOverlay = () => setOverlay(true);

  React.useEffect(() => {
    getBreedList();
  }, [getBreedList]);

  return (
    <>
      <Grid
        container
      >
        <h1
          className='title'
        >{breed}</h1>
        <Grid
          container
          component='ul'
          id='cards-container'
          columnGap={0}
          rowGap={2}
        >
          {
            picturesArr.map((picture, i) => (
              <Grid
                item
                component='li'
                key={i}
                xs={12}
                sm={4}
                md={3}
                lg={3}
                id='thumb'
                sx={{
                  backgroundImage: 'url(' + picture + ')',
                }}
                onClick={openOverlay}
              >
              </Grid>
            ))
          }
        </Grid>
      </Grid>
      <section
        className={displayOverlay ? 'overlay on' : 'overlay'}
      >
        <button
          className='btn-close'
        >
          <span></span>
          <span></span>
        </button>
      </section>
    </>
  );
}