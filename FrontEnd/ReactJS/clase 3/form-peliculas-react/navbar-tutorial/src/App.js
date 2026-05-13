import React from "react";
import Navbar from "./Navbar";
import CarouselComponent from "./CarouselComponent";

import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <CarouselComponent />
      <header className="App-header">
        <h1>Bienvenido al diplomado en programacion</h1>
      </header>
    </div>
  )
}

export default App;