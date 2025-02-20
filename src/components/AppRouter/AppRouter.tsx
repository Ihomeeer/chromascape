import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import SectionDesert from '../SectionDesert/SectionDesert';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/desert" element={<SectionDesert />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
