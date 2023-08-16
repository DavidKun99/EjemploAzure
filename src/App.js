import React from 'react';
import './App.css';
import { Detail, Home, Landing, Form } from "./views";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes, useLocation } from 'react-router-dom';
import { getAllPokemons, getTypes } from './redux/actions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPokemons());
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <div className="App">
      {!isLandingPage && (
        <nav className="navbar">
          <NavBar />
        </nav>
      )}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
} 

export default App;

