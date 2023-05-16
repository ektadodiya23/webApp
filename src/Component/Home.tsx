import { AppBar, Box, Container, Typography } from "@mui/material";
import React from "react";
import Banner from "./Banner";
import Product from "./Product";
import Booknow from "./Booknow";
import BestPro from "./BestPro";
import Offerpro from "./Offerpro";
import Aboutsec from "./Aboutsec";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Banner />
      <Product />
      <Booknow />
      <BestPro />
      <Offerpro />
      <Aboutsec />
      <Footer />
    </div>
  );
}
