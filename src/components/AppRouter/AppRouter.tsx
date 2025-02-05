import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<p>"тест"</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;