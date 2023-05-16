import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Register from "./Component/Register";
import Loginform from "./Component/Loginform";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import AboutDet from "./Component/AboutCom/AboutDet";
import Productdetails from "./Component/ProductCom/Productdetails";
import Booking from "./Component/BookingCom/Booking";
import Contact from "./Component/ContactCom/Contact";
import Renderfile from "./Component/Renderfile";
import Secondfile from "./Component/Secondfile";
import Redirectpro from "./Component/ProductCom/Redirectpro";
import Cart from "./Component/ProductCom/Cart";

function App() {
  const [login, setLogin] = useState(
    localStorage.getItem("login") === "true" &&
      localStorage.getItem("login") !== null
      ? true
      : false
  );

  useEffect(() => {
    setLogin(localStorage.getItem("login") === "true" ? true : false);
    console.log("login", localStorage.getItem("login"));
  }, []);

  return (
    <div>
      <BrowserRouter>
        {!login && (
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Loginform setLogin={setLogin} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        )}
        {login && (
          <>
            <Navbar setLogin={setLogin} />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/About" element={<AboutDet />} />
              <Route path="/Product" element={<Productdetails />} />
              <Route path="/Booking" element={<Booking />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/productDetails/:id" element={<Renderfile />} />
              <Route path="/BestItem/:id" element={<Secondfile />} />
              <Route path="/categories/:id" element={<Redirectpro />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
