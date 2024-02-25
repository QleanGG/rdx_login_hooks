import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Login } from "./features/login/Login";
import NavBar from "./components/Nav/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Nav/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}

export default App;
