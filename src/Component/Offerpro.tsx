import { Box, Button, Typography } from '@mui/material'
import React from 'react';
import secImg from '../Component/Img/sec-image.jpg';
import "./Page.style.css";
import { Link } from 'react-router-dom';

export default function Offerpro() {
  return (
    <div>
      <Box
      className="section_about"
        sx={{
          marginTop: "4%",
          bgcolor: "#01579b",
          color: "white",
          paddingBottom: "2%",
          paddingLeft:"10%" , 
         }}
      >
        <Typography
          variant="h2"
          className="secTitle"
          sx={{ fontWeight: "800", paddingTop: "2%" }}
        >
          Limited Time Offer
        </Typography>
        <Typography
         className='sub_title'
          variant="h6"
          sx={{ paddingTop: "1%", paddingBottom: "1%"}}
        >
          Special Addition
        </Typography>
        <Typography className='offer_para' variant="subtitle1" >
          It is a limited-time promotion that provides customers with an
          exclusive discount or unique product bundle
        </Typography>
        <Button
          className="offerBtn"
          sx={{
            bgcolor: "rgba(59,130,246,.5)",
            color: "white",
            fontWeight: "500",
            marginTop: "1%",
           
            borderRadius: "20px",
            paddingX: "2%",
          }}
        >
          <Link className="link_item" to={"/Product"}>
          
            Shop Now
          </Link>
        </Button>
      </Box>
    </div>
  );
}
