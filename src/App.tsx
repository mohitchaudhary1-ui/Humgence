
import React, { useState } from 'react';
import HomePage from './pages/HomePage';


const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#5155a6] text-white selection:bg-white selection:text-[#5155a6]">
      <HomePage />
    </div>
  );
};

export default App;
