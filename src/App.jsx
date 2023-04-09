import { Routes, Route, Navigate,Link } from "react-router-dom";
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
import Favo from "./favo/Favo";
import Like from "./like/Like";
import Musc from "./music/Musc";
import Games from "./games/Games";
import Useparam from "./useparam/Useparam";
import { useState } from "react";

function App() {


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
          <Route path='/favo' element={<Favo />} />
          <Route path='/like' element={<Like />} />
          <Route path='/music' element={<Musc />} />
          <Route path='/games' element={<Games />} />
          <Route path={`/:title`} element={<Useparam />} />
          <Route path={`/games:title`} element={<Useparam />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
