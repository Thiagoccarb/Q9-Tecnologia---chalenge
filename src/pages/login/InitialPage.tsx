import * as React from 'react';
import { Navigate } from 'react-router-dom';


const InitialPage = () => {
  return (
    <Navigate to='/login' />
  )
}

export default InitialPage;