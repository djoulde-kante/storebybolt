import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PointOfSale from './components/PointOfSale';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<PointOfSale />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;