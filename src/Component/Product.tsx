import { Box, Container, Grid, Paper, styled } from "@mui/material";
import React from "react";
import "./Page.style.css";
import { productData } from "../Component/ProductData/View";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Use_r_state } from "./ProductCom/Store";



export default function Product() {
   const {
     product: { cart },
     dis,
   } = Use_r_state();

  return (
    <div>
      <Box>
        <Box
          className="section_title"
          sx={{
            marginTop: "4%",
            fontSize: "35px",
            fontWeight: "700",
            textAlign: "center ",
          }}
        >
          Feature Products
        </Box>
        <Box sx={{ marginTop: "4%" }}>
          <Grid
            container
            spacing={5}
            sx={{
              width: { xl: "70%", md: "80%", sm: "90%" },
              marginLeft: { xl: "14%", md: "8%", sm: "2%" },
            }}
          >
            {productData.map((productDetails, index) => (
              <Grid item xl={4} md={6} sm={12} xs={12} key={index}>
                <Card className="card_effect" sx={{ maxWidth: "150%" }}>
                  <CardMedia
                    sx={{ marginTop: "9%" }}
                    component="img"
                    alt="green iguana"
                    height="145"
                    className="product_img"
                    image={productDetails.img}
                  />

                  <CardContent>
                    <Typography
                      sx={{ fontWeight: "700" }}
                      gutterBottom
                      variant="h6"
                      component="div"
                    >
                      {productDetails.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontWeight: "600" }}
                    >
                      Brand : {productDetails.brand}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      price :
                      <span className="product_price">
                        {productDetails.price}
                        <span>$</span>
                      </span>
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ marginBottom: "6%" }}>
                    <Button
                      sx={{ marginLeft: "4%", padding: "2%" }}
                      variant="outlined"
                      size="small"
                    >
                      <Link
                        className="btn_link"
                        to={`/productDetails/${productDetails.id}`}
                      >
                        More Info
                      </Link>
                    </Button>
                    <Button
                      className="product_btn"
                      sx={{ padding: "2%" }}
                      variant="contained"
                      size="small"
                      onClick={() =>
                        dis({
                          type: "ADD_TO_CART",
                          payload: productDetails,
                        })
                      }
                    >
                      add to cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
