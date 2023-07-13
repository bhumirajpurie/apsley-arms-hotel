import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./components/About/About";
import Accommodation from "./components/Accomodation/Accomodation";
import Admin from "./components/AdminPanel/Admin";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Product from "./components/Products/Product";
import Registration from "./components/Registration/Registration";
import Reservation from "./components/Reservation/Reservation";
import Recipe from "./components/Recipe/Recipe";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/accomodation" element={<Accommodation />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipe" element={<Recipe />} />
      </Routes>
    </Router>
  );
};

export default App;
