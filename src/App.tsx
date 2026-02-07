import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/components/Header'; // Adjust path as needed
import Home from './pages/Home';
import About from './pages/About'; // The "About" code I gave you earlier

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen text-white selection:bg-[#56c0db] selection:text-white bg-[#0a0f1a]">
        {/* Header stays outside Routes so it shows on every page */}
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* Add more routes here as you build pages */}
          </Routes>
        </main>

        {/* You can add a Footer component here later */}
      </div>
    </Router>
  );
};

export default App;