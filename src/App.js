import React from "react";
import "./App.css";
import IndexHeader from "./components/Headers/IndexHeader";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <IndexHeader>
        <Routes></Routes>
      </IndexHeader>
    </div>
  );
}

export default App;
