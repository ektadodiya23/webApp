import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  List,
  ListItem,
  ListItemButton,
  
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./product.css";
import { Link } from "react-router-dom";
import { Allproduct } from "./Allproduct";
import Footer from "../Footer";
import { Use_r_state } from "./Store";

export default function Productdetails() {

  const [selectedTab, setSelectedTab] = useState(0);

  const { product , dis } = Use_r_state();

  const [productData, setproductData] = useState(Allproduct);
  const [productName , setproductName] = useState("all categories");
  const filterResult = (
    catItem: string,
    Active: React.SetStateAction<number>
  ) => {
    const result = Allproduct.filter((currentData) => {
      return currentData.category === catItem;
    });

    setproductData(result);
    setproductName(catItem);
    setSelectedTab(Active);
  };

  return (
    <div>
      <Box sx={{ marginTop: "9%", textAlign: "center" }}>
        <Typography variant="h4">All Product</Typography>
      </Box>
      <Box>
        <Grid
          container
          className="product_box"
          rowSpacing={2}
          columnSpacing={{ xs: 2, sm: 2, md: 3 }}
        >
          <Grid item xs={3}>
            <Box
              sx={{
                bgcolor: "#fafafa",
                paddingBottom: "90%",
                marginTop: "13%",
              }}
            >
              <nav aria-label="secondary mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <Typography
                        sx={{ color: "#EC4B38" }}
                        className={
                          selectedTab === 1 ? "tab_style_active" : "tab_style"
                        }
                        onClick={() => {
                          setproductData(Allproduct);
                          setproductName("all categories");
                        }}
                      >
                        All categories
                      </Typography>
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                      <Typography
                        className={
                          selectedTab === 2 ? "tab_style_active" : "tab_style"
                        }
                        onClick={() => filterResult("smartphone", 2)}
                      >
                        smartphone
                      </Typography>
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                      <Typography
                        className={
                          selectedTab === 3 ? "tab_style_active" : "tab_style"
                        }
                        onClick={() => filterResult("laptop", 3)}
                      >
                        laptop
                      </Typography>
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                      <Typography
                        className={
                          selectedTab === 4 ? "tab_style_active" : "tab_style"
                        }
                        onClick={() => filterResult("smartwatch", 4)}
                      >
                        smartwatch
                      </Typography>
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                      <Typography
                        className={
                          selectedTab === 5 ? "tab_style_active" : "tab_style"
                        }
                        onClick={() => filterResult("earbuds", 5)}
                      >
                        earbuds
                      </Typography>
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                      <Typography
                        className={
                          selectedTab === 6 ? "tab_style_active" : "tab_style"
                        }
                        onClick={() => filterResult("keyboard", 6)}
                      >
                        Keyboard
                      </Typography>
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                      <Typography
                        className={
                          selectedTab === 7 ? "tab_style_active" : "tab_style"
                        }
                        onClick={() => filterResult("graphics card", 7)}
                      >
                        graphics card
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            </Box>
          </Grid>
          <Grid item xs={9}>
            <Box>
              <Typography variant="h6" sx={{ marginBottom: "2%" }}>
                Home / <span className="text_style">{productName}</span>
              </Typography>
              <Grid container spacing={5} sx={{ width: "100%" }}>
                {productData.map((categories, index) => (
                  <Grid item xl={4} sm={12} md={6} xs={12} key={index}>
                    <Card className="card_effect" sx={{ maxWidth: "150%" }}>
                      <CardMedia
                        sx={{ marginTop: "9%" }}
                        component="img"
                        alt="green iguana"
                        height="145"
                        className="product_img"
                        image={categories.img}
                      />

                      <CardContent>
                        <Typography
                          sx={{ fontWeight: "700" }}
                          gutterBottom
                          variant="h6"
                          component="div"
                        >
                          {categories.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ fontWeight: "600" }}
                        >
                          Brand : {categories.brand}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          price :
                          <span className="product_price">
                            {categories.price}
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
                            className="proBTn"
                            to={`/categories/${categories.id}`}
                          >
                            More Info
                          </Link>
                        </Button>
                        <Button
                          className="product_btn"
                          sx={{ padding: "2%" }}
                          variant="contained"
                          size="small"
                          onClick={() => {
                            dis({
                              type: "ADD_TO_CART",
                              payload: categories,
                            });
                          }}
                        >
                          add to cart
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </div>
  );
}
