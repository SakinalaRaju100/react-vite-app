// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import EnrollList from "./components/EnrollList";
import Counting from "./components/Counting";
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router-dom";
import zIndex from "@mui/material/styles/zIndex";
// import SouvinerBook from "./components/SouvinerBook";

// import { pdfjs } from "react-pdf";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist@4.9.155/build/pdf.worker.min.mjs",
//   import.meta.url
// ).toString();

// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/legacy/build/pdf.worker.min.mjs",
//   import.meta.url
// ).toString();
const App = () => {
  const [isReady, setIsReady] = React.useState(false); // Determines if the countdown is complete

  // const counting = true;
  return (
    <div>
      <Routes>
        {!isReady ? (
          <Route path="/" element={<Counting setIsReady={setIsReady} />} />
        ) : (
          <Route path="/" element={<Dashboard />} />
        )}
        <Route path="/enrollment" element={<EnrollList />} />
        {/* <Route path="/souviner-book" element={<SouvinerBook />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
