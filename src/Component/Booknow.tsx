import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react';
import bgImg from '../Component/Img/bg-img.png' ;
import "./Page.style.css";
import { Link } from 'react-router-dom';

export default function Booknow() {
  return (
    <div>
      <Box sx={{ marginTop: "4%", position: "relative" }} className="img_order">
        <img src={bgImg} alt="" className="bg_img" />
        <Box>
          <Grid container spacing={2} >
            <Grid xl={6} xs={8}>
              <Box className="contant_order">
                <Typography
                  variant="h4"
                  sx={{ color: "white", fontWeight: "500" }}
                >
                  Are you confused,which product is suitable for you ?
                </Typography>
                <Typography
                  className="title_order"
                  variant="h4"
                  sx={{ fontWeight: "500" }}
                >
                  Need consultation?
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "500", color: "white" }}
                  className="contant_about"
                >
                  Get ultimate solution from our talent
                </Typography>
              </Box>
            </Grid>
            <Grid xl={6} xs={4} sm={12}>
              <Button
                className="order_btn"
                sx={{
                  bgcolor: "rgba(59,130,246,.5)",
                  color: "white",
                  borderRadius: "50px",
                  fontWeight: "500",
                }}
              >
                <Link className="link_item" to={"/Booking"}>
                  BookNow
                </Link>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
