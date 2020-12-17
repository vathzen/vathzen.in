import React from 'react';
import { Route,BrowserRouter } from 'react-router-dom';

import Routes from './components/routes/routes';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route path="*">
        <Routes></Routes>
      </Route>
    </BrowserRouter>
  );
}

export default App;
