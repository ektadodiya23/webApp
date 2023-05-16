import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import bannerImg from "../Img/bg1.png";
import '../Page.style.css';
import BestPro from "../BestPro";
import Footer from "../Footer";
export default function Booking() {

  const[valueName , setValuename] = useState('');
  const [dataName , setdataName] = useState('');


  const validationForm = () => {
    if(valueName.length == 0){
      alert("Invalid Form, Subject can not be empty");
      return 
    } else if (dataName.length == 0){
      alert("Please select a date!");
      return
    }

    alert("Thank you for booking !");
   
  };
 

  return (
    <div>
      <Box sx={{ marginTop: "5%", bgcolor: "rgba(0, 0, 0, .7)" }}>
        <Box position={"relative"}>
          <img
            src={bannerImg}
            
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
            Booking
          </Typography>
        </Box>
      </Box>
      <Box
        bgcolor={"white"}
        boxShadow={1}
        sx={{ marginY: "2%", paddingY: "2%" , textAlign:"center" }}
      >
        <TextField
          onChange={(e: any) => setValuename(e.target.value)}
          required={true}
          sx={{ marginRight: "2%" }}
          type="text"
          placeholder="Subject?"
        ></TextField>

        <TextField
          onChange={(e) => setdataName(e.target.value)}
          required={true}
          type="date"
          placeholder="Subject?"
        ></TextField>
        <Button
          className="booking_btn"
          type="submit"
          onClick={() => validationForm()}
          sx={{
            marginLeft: "2%",
            bgcolor: "#00b0ff",
            color: "white",
            paddingX: "27px",
            paddingY: "8px",
            marginTop: "7px",
          }}
        >
          submit
        </Button>
      </Box>
      <BestPro />
      <Footer />
    </div>
  );
}
