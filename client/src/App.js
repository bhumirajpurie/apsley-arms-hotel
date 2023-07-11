import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Product } from "./components/Product";
import { Receipe } from "./components/Receipe";
import { Accomodation } from "./components/Accomodation";
import { About } from "./components/About";
// import { Login } from "./components/Login";
import { Shoppingcart } from "./components/Shoppingcart";
import SignUp from "./components/Signup";
function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/receipe" element={<Receipe />} />
          <Route path="/about" element={<About />} />
          <Route path="/accomodation" element={<Accomodation />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/cart" element={<Shoppingcart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
