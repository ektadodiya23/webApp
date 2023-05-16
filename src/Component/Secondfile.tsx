import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid,  Typography } from '@mui/material';
import React from 'react'
import "./Page.style.css";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BestProduct } from  "./ProductData/BestSell";
import Footer from './Footer';
import {Link ,  useParams } from 'react-router-dom';
import { Use_r_state } from './ProductCom/Store';

export default function Secondfile() {
const { product, dis } = Use_r_state();
       let { id } = useParams(); 
        const findData = BestProduct.find((data)=>data.id ==id); 

  return (
    <div>
      <Box sx={{ marginTop: "7%", bgcolor: "#f5f5f5" }}>
        <Grid
          className="info_cart"
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
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
                image={findData?.img}
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
                    {findData?.title}
                  </Typography>
                  <Typography
                    sx={{ marginLeft: "3%", marginTop: "3%" }}
                    variant="subtitle1"
                  >
                    price : {findData?.price}
                  </Typography>
                  <Typography sx={{ marginLeft: "3%" }} variant="subtitle1">
                    Brand : {findData?.brand}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "30px",
                      marginLeft: "2%",
                      marginTop: "3%",
                    }}
                    variant="subtitle1"
                  >
                    Key features
                  </Typography>
                  <Typography
                    sx={{ maxWidth: "90%", paddingLeft: "2%" }}
                    variant="subtitle1"
                  >
                    {findData?.desc}
                  </Typography>
                  <Typography
                    sx={{ marginLeft: "2%", marginTop: "4%" }}
                    variant="subtitle1"
                  >
                    Category : {findData?.category}
                  </Typography>
                  <Typography sx={{ marginLeft: "2%" }} variant="subtitle1">
                    Rating :
                    <span className="rating_text">{findData?.rating}</span>
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
                        payload: findData,
                      });
                    }}
                  >
                    add to cart
                  </Button>
                </CardActions>
              </Card>

              <Box>
                <Button
                  sx={{
                    marginBottom: "13%",
                    marginTop: "6%",
                  
                  }}
                >
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
