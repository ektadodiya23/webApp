import React from 'react';
import { BestProduct } from './ProductData/BestSell';
import "./Page.style.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { Use_r_state } from './ProductCom/Store';
export default function BestPro() {
    const {
      product: { cart },
      dis,
    } = Use_r_state();
  return (
    <div>
      <Box>
        <Box
          sx={{
            marginTop: "4%",
            fontSize: "35px",
            fontWeight: "700",
            textAlign: "center ",
          }}
        >
          Best Selling Products
        </Box>
        <Box sx={{ marginTop: "4%" }}>
          <Grid
            className="container_box"
            container
            spacing={5}
            sx={{
              width: { xl: "70%", md: "80%", sm: "90%" },
              marginLeft: { xl: "14%", md: "8%", sm: "2%" },
            }}
          >
            {BestProduct.map((BestItem, index) => (
              <Grid item xl={4} md={4} sm={6} xs={12} key={index}>
                <Card className="card_effect" sx={{ maxWidth: "150%" }}>
                  <CardMedia
                    sx={{ marginTop: "9%" }}
                    component="img"
                    alt="green iguana"
                    height="145"
                    className="product_img"
                    image={BestItem.img}
                  />

                  <CardContent>
                    <Typography
                      sx={{ fontWeight: "700" }}
                      gutterBottom
                      variant="h6"
                      component="div"
                    >
                      {BestItem.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontWeight: "600" }}
                    >
                      Brand : {BestItem.brand}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      price :
                      <span className="product_price">
                        {BestItem.price} <span>$</span>
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
                        to={`/BestItem/${BestItem.id}`}
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
                          payload: BestItem,
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
