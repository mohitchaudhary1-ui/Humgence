
import React, { useState } from 'react';
import HomePage from './pages/HomePage';


const App: React.FC = () => {
  return (
    <div className="min-h-screen text-white selection:bg-[#5155a6] selection:text-white">
      <HomePage />
    </div>
  );
};

export default App;
