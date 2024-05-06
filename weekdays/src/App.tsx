import React from 'react';
import './App.css';
import { Router } from 'react-chrome-extension-router';
import pages from './pages/pages'

const App: React.FC = () => {
  return (
    <div>
      <Router>
      <pages.Home></pages.Home>
      </Router>
    </div>
  );
};

export default App;
