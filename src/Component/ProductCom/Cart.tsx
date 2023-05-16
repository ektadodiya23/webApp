import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import { Box, Button, Typography } from "@mui/material";
import { Use_r_state } from "./Store";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./product.css";
import { BsTrashFill } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

import { cartitem } from "./Reducer";



export default function Cart() {
  const [priceTotal, setpriceTotal] = useState(0);

  const {
    product: { cart },
    dis,
  } = Use_r_state();
  console.log({ cart });

  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(0)
    cart.forEach((item) => {
      setTotal((total) => {
        return total += item.qty * item.price;
      });
    });
    console.log(total);
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <>
          <Box className="cart_box" sx={{ marginTop: "9%", paddingY: "1%" }}>
            <TableContainer
            className="cart_item"
              component={Paper}
              sx={{ maxWidth: "70%", marginLeft: "15%" }}
            >
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{ fontWeight: "700", fontSize: "20px" }}
                      align="center"
                    >
                      Product
                    </TableCell>
                    <TableCell
                      sx={{ fontWeight: "700", fontSize: "20px" }}
                      align="center"
                    >
                      Name
                    </TableCell>
                    <TableCell
                      sx={{ fontWeight: "700", fontSize: "20px" }}
                      align="center"
                    >
                      Category
                    </TableCell>
                    <TableCell
                      sx={{ fontWeight: "700", fontSize: "20px" }}
                      align="center"
                    >
                      Price
                    </TableCell>
                    <TableCell
                      sx={{ fontWeight: "700", fontSize: "20px" }}
                      align="center"
                    >
                      Quantity
                    </TableCell>
                    <TableCell
                      sx={{ fontWeight: "700", fontSize: "20px" }}
                      align="center"
                    >
                      Subtotal
                    </TableCell>
                    <TableCell
                      sx={{ fontWeight: "700", fontSize: "20px" }}
                      align="center"
                    >
                      Remove
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cart.map((item: cartitem, index: number) => {
                    return (
                      <>
                        <TableRow
                          key={index}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell align="center" className="tableRow">
                            <img src={item.img} alt="" className="cartImg" />
                          </TableCell>
                          <TableCell sx={{ fontSize: "20px" }} align="center">
                            {item.title}
                          </TableCell>
                          <TableCell sx={{ fontSize: "20px" }} align="center">
                            {item.category}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontSize: "20px",
                              color: "red",
                              fontWeight: "700",
                            }}
                            align="center"
                          >
                            {item.price}
                            <span>$</span>
                          </TableCell>
                          <TableCell
                            className="tablePart"
                            sx={{ fontSize: "20px" }}
                            align="center"
                          >
                            <span className="iconPlus">
                              <CiCirclePlus
                                fontSize={"25px"}
                                onClick={() =>
                                  dis({
                                    type: "INCREASE",
                                    payload: item,
                                  })
                                }
                              />
                            </span>
                            <span className="qtyitem"> {item.qty}</span>

                            <span className="iconminus">
                              <CiCircleMinus
                                fontSize={"25px"}
                                onClick={() => {
                                  if (item.qty > 1) {
                                    dis({
                                      type: "DECREASE",
                                      payload: item,
                                    });
                                  } else {
                                    dis({
                                      type: "REMOVE_FROM_CART",
                                      payload: item,
                                    });
                                  }
                                }}
                              />
                            </span>
                          </TableCell>

                          <TableCell
                            sx={{
                              fontSize: "20px",
                              color: "red",
                              fontWeight: "700",
                            }}
                            align="center"
                          >
                            {item.qty * item.price}
                            <span>$</span>
                          </TableCell>

                          <TableCell align="center">
                            <BsTrashFill
                              className="dltIcon"
                              fontSize={25}
                              onClick={() =>
                                dis({
                                  type: "REMOVE_FROM_CART",
                                  payload: item,
                                })
                              }
                            />
                          </TableCell>
                        </TableRow>
                      </>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Typography sx={{ textAlign: "center" }}>Total:{total}</Typography>
        </>
      ) : (
        <Typography
          variant="subtitle1"
          sx={{ marginTop: "8%", fontSize: "25px", textAlign: "center" }}
        >
          your cart is Empty!!
        </Typography>
      )}
    </div>
  );
}
