import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import "./Page.style.css";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { Use_r_state } from "./ProductCom/Store";
import Register from "./Register";

export default function Navbar(props: any) {
  const {
    product: { cart },
  } = Use_r_state();
  const navigate = useNavigate();

  const [selected, setSelected] = useState(0);
  const [showMediaicon, setshowMediaicon] = useState(false);

  const handleClick = (Active: React.SetStateAction<number>) => () => {
    setSelected(Active);
  };

  const handleLogout = () => {
    props.setLogin(false);
    localStorage.setItem("login", "false");
    navigate("/");
  };

  return (
    <div>
      <Box sx={{ bgcolor: "black", color: "white" }}>
        <Container maxWidth="md">
          <AppBar component="nav" sx={{ bgcolor: "white" }} position="absolute">
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              sx={{ p: 4 }}
            >
              <Typography
                variant="h3"
                sx={{ fontFamily: "emoji", color: "black" }}
              >
                ITS
              </Typography>

              <Box className={showMediaicon ? "drawer_active" : "menu_link"}>
                <ListItem>
                  <ListItemText className="nav-bar">
                    <Link
                      onClick={handleClick(1)}
                      className={
                        selected === 1 ? "nav_active" : "nav_item_active"
                      }
                      to={"home"}
                    >
                      Home
                    </Link>
                  </ListItemText>

                  <ListItemText className="nav-bar">
                    <Link
                      onClick={handleClick(2)}
                      className={selected === 2 ? "nav_active" : "nav_item"}
                      to={"About"}
                    >
                      About
                    </Link>
                  </ListItemText>

                  <ListItemText className="nav-bar">
                    <Link
                      onClick={handleClick(3)}
                      className={selected === 3 ? "nav_active" : "nav_item"}
                      to={"Product"}
                    >
                      Product
                    </Link>
                  </ListItemText>

                  <ListItemText className="nav-bar">
                    <Link
                      onClick={handleClick(4)}
                      className={selected === 4 ? "nav_active" : "nav_item"}
                      to={"Booking"}
                    >
                      Booking
                    </Link>
                  </ListItemText>
                  <ListItemText className="nav-bar">
                    <Link
                      onClick={handleClick(5)}
                      className={selected === 5 ? "nav_active" : "nav_item"}
                      to={"Contact"}
                    >
                      Contact
                    </Link>
                  </ListItemText>
                  <Button
                    sx={{ marginRight: "3%" }}
                    variant="outlined"
                    size="medium"
                    onClick={handleLogout}
                  >
                    LOGOUT
                  </Button>
                  <Link
                    className="iconLink"
                    onClick={handleClick(6)}
                    to={"/Cart"}
                  >
                    <AiOutlineShoppingCart
                      className={
                        selected === 6 ? "icon_cart_active" : "icon_cart"
                      }
                    />
                    <span className="addTocart"> {cart && cart.length}</span>
                  </Link>
                </ListItem>
              </Box>
              <Box
                className="menu_icon"
                sx={{ color: "black", fontSize: "24px" }}
              >
                <AiOutlineMenu
                  onClick={() => setshowMediaicon(!showMediaicon)}
                />
              </Box>
            </Box>
          </AppBar>
        </Container>
      </Box>
    </div>
  );
}
