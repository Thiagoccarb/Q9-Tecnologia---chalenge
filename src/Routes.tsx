import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LoginPage, InitialPage } from './pages/login'
import { Menu } from './pages/BreedsMenu';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/breeds" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
