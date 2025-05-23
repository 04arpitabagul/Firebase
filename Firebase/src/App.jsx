import { useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Router from "./AllRoutes/Router";

function App() {
  return (
    <>
      <Navbar />
      <Router />
    </>
  );
}

export default App;
