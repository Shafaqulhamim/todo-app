import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Home from './pages/Home';
function App() {
  return (
    <>
      <BrowserRouter basename='/todo-app'>
      <Routes>
        <Route index element = {<Login />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/pages/Home' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
