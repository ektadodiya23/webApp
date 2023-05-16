import { Avatar, Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react';
import "./Page.style.css";
import { FaGlobe } from "react-icons/fa";
import {Offericon, Paymenticon, QualityIcon, WebIcon} from './SvgIcons/Svg'

const About = [
  {
    id: "1",
    icon: <WebIcon />,
    title: "Worldwide Shipping",
    about:
      "We offer worldwide shipping to make our products accessible to customers all over the world.",
  },
  {
    id: "2",
    icon: <QualityIcon/>,
    title: "Best Quality",
    about:
      "We believe in providing our customers with only the best quality products.",
  },
  {
    id: "3",
    icon: <Offericon/>,
    title: "Best Offers",
    about:
      "We pride ourselves on offering the best deals and discounts to our customers.",
  },
  {
    id: "4",
    icon: <Paymenticon/>,
    title: "Secure Payments",
    about:
      "We offer a range of secure payment options to ensure that your transactions are safe and secure.",
  },
];

export default function Aboutsec() {
  return (
    
      <Box>
        <Box
          sx={{
            marginTop: "3%",
            fontSize: "35px",
            fontWeight: "700",
            textAlign: "center ",
          }}
        >
          Why Choose Us
        </Box>
        <Box sx={{ marginTop: "2%" }}>
          <Grid
            container
            spacing={4}
            sx={{
              width: { xl: "70% ", md: "80%", sm: "60%", xs: "60%" },
              marginLeft: { xl: "15%", md: "9%", sm: "18%", xs: "10%" },
            }}
          >
            {About.map((aboutinfo, index) => (
              <Grid item xl={3} sm={12} md={6} xs={12} key={index}>
                <Card
                  sx={{ textAlign: "center" }}
                 >
                  <CardContent>
                    <Typography variant='subtitle1'>{aboutinfo.icon}</Typography>
                    <Typography variant="h5" component="div">
                      {aboutinfo.title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {aboutinfo.about}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
   
  );
}
