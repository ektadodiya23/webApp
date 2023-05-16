import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react';
import "./Page.style.css";
import { Link, useParams } from 'react-router-dom';
import { productData } from "../Component/ProductData/View";
import Footer from './Footer';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Use_r_state } from './ProductCom/Store';
export default function Renderfile() {

   let { id } = useParams(); 
   const findProduct =   productData.find((product)=>product.id  == id);
   const { product, dis } = Use_r_state();

  return (
    <div>
      <Box sx={{ marginTop: "7%", bgcolor: "#f5f5f5" }}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          className="info_cart"
        >
          <Grid item xl={6} md={6} xs={12}>
            <Box>
              <CardMedia
                sx={{ marginTop: "14%" }}
                component="img"
                alt="green iguana"
                height="300"
                width="350"
                className="product_img"
                image={findProduct?.img}
              />
            </Box>
          </Grid>
          <Grid item xl={6} md={6} xs={12}>
            <Box className="cart_info" sx={{ width: "70%", marginTop: "6%" }}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ textAlign: "center" }}
                  >
                    {findProduct?.title}
                  </Typography>
                  <Typography
                    sx={{ marginLeft: "3%", marginTop: "3%" }}
                    variant="subtitle1"
                  >
                    price : {findProduct?.price}
                  </Typography>
                  <Typography sx={{ marginLeft: "3%" }} variant="subtitle1">
                    Brand : {findProduct?.brand}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "30px",

                      marginTop: "3%",
                    }}
                    variant="subtitle1"
                  >
                    Key features
                  </Typography>
                  <Typography
                    sx={{ maxWidth: "90%", paddingLeft: "1%" }}
                    variant="subtitle1"
                  >
                    {findProduct?.desc}
                  </Typography>
                  <Typography
                    sx={{ marginLeft: "1%", marginTop: "4%" }}
                    variant="subtitle1"
                  >
                    Category : {findProduct?.category}
                  </Typography>
                  <Typography sx={{ marginLeft: "1%" }} variant="subtitle1">
                    Rating :
                    <span className="rating_text">{findProduct?.rating}</span>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    className="product_btn"
                    sx={{ padding: "2%", marginBottom: "2%" }}
                    variant="contained"
                    size="small"
                    onClick={() => {
                      dis({
                        type: "ADD_TO_CART",
                        payload: findProduct,
                      });
                    }}
                  >
                    add to cart
                  </Button>
                </CardActions>
              </Card>
              <Box>
                <Button sx={{ marginBottom: "13%", marginTop: "6%" }}>
                  <Link className="proBtn" to={"/Product"}>
                    <AiOutlineArrowLeft />
                    Go to Product
                  </Link>
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </div>
  );
}
