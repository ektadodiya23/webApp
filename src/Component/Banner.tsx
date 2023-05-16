import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import "./Page.style.css";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Slider = [
  {
    id: "1",
    img: "https://c1.wallpaperflare.com/preview/511/678/514/android-applications-cellphone-mobile-phone-thumbnail.jpg",
    title: "Power and Portability at your Fingertips",
  },
  {
    id: "2",
    img: "https://c0.wallpaperflare.com/preview/490/157/192/glass-table-smartphone-iphone7.jpg",
    title: "Stay Connected on the Go",
  },
  {
    id: "3",
    img: "https://wallpapers.com/images/hd/vintage-dark-blue-2xrl3q1w6992hsna.jpg",
    title: "The Ultimate Gaming Experience",
  },
  {
    id: "4",
    img: "https://b2491170.smushcdn.com/2491170/wp-content/uploads/2020/03/mobile-phone.jpg?lossy=0&strip=1&webp=1",
    title: "Track your Fitness and Stay Connected",
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
   const isFirstSlide = current === 0;
   const newIndex = isFirstSlide ? Slider.length - 1 : current -1 ;
   setCurrent(newIndex);
    
  };
 

  const nextSlide = () => {
   const isLastSlide = current === Slider.length -1 ;
   const newIndex = isLastSlide ? 0 : current + 1;
   setCurrent(newIndex);
   };

  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: "750px",
          marginTop: "6%",
          color: "black",
          overflow: "hidden",
        }}
      >
        {Slider.map((item, index) => (
          <Box
            className="banner"
            key={index}
            display={current === index ? "block" : "none"}
            position={"relative"}
          >
            <img src={item.img} alt="img" className="img_part_banner" />
            <Box className="banner_text">
              <Typography
                variant="h1"
                className="banner_title"
                sx={{ fontWeight: "700", color: "white" , textAlign:"center" }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "white",
                  marginTop: "4%",
                  maxWidth: "93%",
                 textAlign:"center"
                }}
              >
                Discover our wide range of laptops for all your computing needs.
                From ultrabooks to gaming laptops, our selection offers the
                perfect combination of power and portability for your lifestyle.
                Discover our wide range of laptops for all your computing needs.
                From ultrabooks to gaming laptops, our selection offers the
                perfect combination of power and portability for your lifestyle.
              </Typography>
              <Button className="banner_btn"  >
                <Link className="link_item" to={"/Product"}>
                  Shop now
                </Link>
              </Button>
            </Box>
          </Box>
        ))}
        <Box className="btn_icon">
          <BsChevronLeft
            onClick={prevSlide}
            className="icon_style"
            color="white"
            
          />
        </Box>

        <Box className="btn_part">
          <BsChevronRight
            className="icon_style"
            onClick={nextSlide}
            color="white"
          />
        </Box>
      </Box>
    </div>
  );
}
