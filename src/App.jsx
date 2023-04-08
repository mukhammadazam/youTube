import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Card from "./cards/Card";
import Navbar from "./navbar/Navbar";
import Saidbar from "./Saidbar/Saidbar";
import Potpis from "./potpiska/Potpis";
import Shorts from "./shorts/Shorts";
import Biblet from "./biblet/Biblet";
import Vedio from "./vedio/Vedio";
import History from "./history/History";
import Watch from "./watch/Watch";

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
          <Route path='/history' element={<History />} />
          <Route path='/watch' element={<Watch />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
