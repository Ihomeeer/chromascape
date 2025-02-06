import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppHeader />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
