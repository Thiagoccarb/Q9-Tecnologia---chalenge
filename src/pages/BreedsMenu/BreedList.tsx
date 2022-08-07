import * as React from 'react';
import Grid from '@mui/material/Grid';
import { useOutletContext } from 'react-router-dom';

import { fetchBreedList } from '../../API/list';
import { Spinner } from '../../genericComponents';

export default function BreedList() {
  const { data: { breed, showBreedsMenu } } = useOutletContext<
    { data: { breed: string, showBreedsMenu: string } }
  >();
  const [displayOverlay, setOverlay] = React.useState<boolean>(false);
  const [selectedImage, setImage] = React.useState<string>('');
  const [isLoading, setLoading] = React.useState<boolean>(true);
  const [breedPictures, setPictures] = React.useState<
    { breed: string, list: string[] }
  >({ breed: '', list: [] });

  const { list: picturesArr } = breedPictures;

  const getBreedList = React.useCallback(async () => {
    !isLoading && setLoading(true);
    const data = await fetchBreedList(breed);
    setPictures(data);
    setTimeout(() => setLoading(false), 500);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [breed]);

  const openOverlay = () => setOverlay(true);

  const closeOverlay = () => setOverlay(false);

  const saveImage = (i: number) => setImage(picturesArr[i]);

  const handleImageClick = (i: number) => {
    openOverlay();
    saveImage(i);
  }


  React.useEffect(() => {
    getBreedList();
  }, [getBreedList]);

  return (
    <>
      {
        isLoading && <Spinner />
      }
      {
        !isLoading
        && <>
          <Grid
            container
          >
            <h1
              className={showBreedsMenu ? 'title mobile' : 'title'}
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
                    onClick={() => handleImageClick(i)}
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
              onClick={closeOverlay}
            >
              <span></span>
              <span></span>
            </button>
            <div
              style={{
                backgroundImage: 'url(' + selectedImage + ')',
              }}
            >
            </div>
          </section>
        </>
      }
    </>
  );
}