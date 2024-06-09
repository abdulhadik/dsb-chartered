import React from'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import NavbarStyle from './components/navabar/Navbar';
import Main from './pages/main/Main';
import Footer from './components/footer/Footer'
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavbarStyle />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

