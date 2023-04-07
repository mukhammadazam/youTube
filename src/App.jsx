import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./cards/Card";
import Navbar from "./navbar/Navbar";
import Saidbar from "./Saidbar/Saidbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar  />
    <div className='grid grid-rows-1 grid-flow-col'>
      <Saidbar />
      <Routes>
        <Route path='/' element={<Card />} />
      </Routes>
    </div>
    </>
  );  
}

export default App;
