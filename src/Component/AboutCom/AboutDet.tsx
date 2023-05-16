import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import bannerImg from '../Img/bg1.png';
import './style1.css' ; 
import aboutImg from '../Img/about-part.png';
import Team from './Team';
import Aboutsec from '../Aboutsec';
import Footer from '../Footer';


export default function AboutDet() {
  return (
    <div>
      <Box sx={{ marginTop: "5%", bgcolor: "rgba(0, 0, 0, .7)" }}>
        <Box position={"relative"}>
          <img
            src={bannerImg}
            alt=" "
            width={"100%"}
            height={"400px"}
            className="banner_img"
          />
        </Box>
        <Box className="about_text">
          <Typography
            variant="h2"
            sx={{ fontWeight: "700", color: "white", fontSize: "70px" }}
          >
            About Us
          </Typography>
        </Box>
      </Box>
      {/* section-second */}
      <Box sx={{ marginTop: "3%", bgcolor: "#f5f5f5", paddingY: "3%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className='about_info'>
          <Grid item xs={6} xl={6} md={12} className='box_width' >
            <Typography
              variant="h2"
              sx={{ color: "#424242", marginTop: "7%", fontWeight: "600" , textAlign:"center" }}
            >
              Who we are?
            </Typography>
            <Typography
            className='team_info'
              variant="subtitle1"
              sx={{
                color: "gray",
                maxWidth: "70%",
                marginLeft: "31%",
                textAlign: "justify",
                fontSize: "18px",
              }}
            >
              We are a team of passionate individuals committed to providing
              high-quality products and exceptional customer service. Our
              mission is to make technology accessible to everyone, no matter
              where they are in the world. Shop with us and experience the
              difference of working with a dedicated and customer-centric team.
            </Typography>
          </Grid>
          <Grid item xs={6} >
            <img src={aboutImg} alt=" " className="aboutImg" />
          </Grid>
        </Grid>
      </Box>
      <Team />
      <Aboutsec />
      <Footer />
    </div>
  );
}
