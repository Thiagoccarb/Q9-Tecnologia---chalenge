import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LoginPage, InitialPage } from './pages/login'
import { BreedsMenu, BreedList } from './pages/BreedsMenu';


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<BreedsMenu />} >
          <Route path=":id" element={<BreedList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
