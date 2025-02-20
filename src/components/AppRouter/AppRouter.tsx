import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
<<<<<<< HEAD
import SectionForest from '../SectionForest/SectionForest';
=======
import SectionDesert from '../SectionDesert/SectionDesert';
>>>>>>> 9f936652e436f53a1393e20178f81d29f40e807b

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
<<<<<<< HEAD
        <Route path="/forest" element={<SectionForest />} />
=======
        <Route path="/desert" element={<SectionDesert />} />
>>>>>>> 9f936652e436f53a1393e20178f81d29f40e807b
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

