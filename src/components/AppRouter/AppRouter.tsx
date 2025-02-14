import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import SectionForest from '../SectionForest/SectionForest';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/forest" element={<SectionForest />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

