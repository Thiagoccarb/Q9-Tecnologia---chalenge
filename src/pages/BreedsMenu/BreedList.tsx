import * as React from 'react';
import { useOutletContext } from 'react-router-dom';


export default function BreedList() {
  const breed = useOutletContext<string>();
  return (
    <>
      <h1
        className='title'
      >{breed}</h1>
    </>
  );
}