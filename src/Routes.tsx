import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LoginPage, InitialPage } from './pages/login'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
