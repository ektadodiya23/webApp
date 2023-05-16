import { Box, Card, CardContent, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import "./style.css";
import bannerImg from "../Img/bg1.png";
import Footer from "../Footer";

const contact = [
  {
    id: "1",
    title: "Sales",
    desc: "Expert sales assistance for all customers. Our sales team is dedicated to providing expert guidance to customers",
    number: "1800 123 4567",
  },
  {
    id: "2",
    title: "Complaints",
    desc: "We take customer satisfaction seriously and strive to address any complaints in a timely and efficient manner",
    number: "1800 123 4567",
  },
  {
    id: "3",
    title: "Returns",
    desc: "Hassle-free returns and exchanges. We understand that sometimes products just don't work out.",
    number: "1800 123 4567",
  },
  {
    id: "4",
    title: "Marketing",
    desc: "Our marketing team works collaboratively with businesses to help them grow and succeed",
    number: "1800 123 4567",
  },
];

export default function Contact() {
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
            Contact us
          </Typography>
        </Box>
      </Box>
      <Box sx={{ marginTop: "3%" }}>
        <Typography
          className="contact_title"
          variant="h3"
          sx={{ fontWeight: "600", color: "#424242", textAlign: "center" }}
        >
          We're here to help you
        </Typography>
      </Box>

      <Box sx={{ marginTop: "2%" }}>
        <Grid
          container
          spacing={4}
          sx={{ width: "70%", marginLeft: "14%" }}
          className="contact_box"
        >
          {contact.map((contactList, index) => (
            <Grid item sm={12} md={6} xs={12} xl={3} key={index}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  "& > :not(style)": {
                    m: 1,
                    width: 390,
                    height: 250,
                    textAlign: "center",
                  },
                }}
              >
                <Paper elevation={3} sx={{ paddingY: "13%", paddingX: "3%" }}>
                  <Typography
                    variant="h5"
                    component="div"
                    className="contact_info"
                  >
                    {contactList.title}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {contactList.desc}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ marginY: "4%", color: "#33bfff" }}
                  >
                    {contactList.number}
                  </Typography>
                </Paper>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </div>
  );
}
