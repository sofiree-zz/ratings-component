import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Ratings } from './components';


function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Ratings/>}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
