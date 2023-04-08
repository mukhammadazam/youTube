import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./cards/Card";
import Navbar from "./navbar/Navbar";
import Saidbar from "./Saidbar/Saidbar";
import Cards from "./cards/Cards";
import Potpis from "./potpiska/Potpis";
import Shorts from "./shorts/Shorts";
import Biblet from "./biblet/Biblet";
import Vedio from "./vedio/Vedio";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Vedio />
      <div className='grid grid-rows-1 grid-flow-col'>
        <Saidbar />
        <Routes className='flex-col'>
          <Route path='/' element={<Card />} />
          <Route path='/shorts' element={<Shorts />} />
          <Route path='/pat' element={<Potpis />} />
          <Route path='/biblet' element={<Biblet />} />

          {/* <Route path='/' element={<Cards />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
