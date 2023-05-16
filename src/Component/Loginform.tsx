import {
  Box,
  Button,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Page.style.css";
import img from "../Component/Img/bg.jpg";
import { DiReact } from "react-icons/di";
import { Link, useNavigate } from "react-router-dom";
import { IloginData } from "./DataType";

export default function Loginform(props: any) {
  const loginValue: IloginData = {
    email: "",
    password: "",
  };

  const [loginInput, setloginInput] = useState(loginValue);
  const [loginError, setloginError] = useState<any>({});
  const [loginSubmit, setloginSubmit] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: any) => {
    const { name, value } = e.target;
    setloginInput({ ...loginInput, [name]: value });
  };

  const handleLoginsubmit = (e: any) => {
    e.preventDefault();
    setloginError(handleLoginvali(loginInput));
    setloginSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(loginError).length === 0 && loginSubmit) {
      localStorage.setItem("login", "true");
      props.setLogin(true);
      navigate("/home");
      console.log(loginInput);
    }
  }, [loginError]);

  const handleLoginvali = (value: any) => {
    const loginError: any = {};
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const Uppercase = /^(?=.*[A-Z]).*$/;
    const ContainsNumber = /^(?=.*[0-9]).*$/;
    const specialSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;

    if (!value.email) {
      loginError.email = "***email is required!";
    } else if (!regexEmail.test(value.email)) {
      loginError.email = "***This is not a valid email format !";
    }

    //password validation
    if (!value.password) {
      loginError.password = "***password is required!";
    } else if (value.password.length < 4) {
      loginError.password = "***Password must be more then 4 characters";
    } else if (value.password.length > 10) {
      loginError.password = "***Password cannot exceed more then 10 characters";
    } else if (!Uppercase.test(value.password)) {
      loginError.password =
        "***Password must have at least one uppercase characters!";
    } else if (!ContainsNumber.test(value.password)) {
      loginError.password = "***Password must contain at least one Digit.";
    } else if (!specialSymbol.test(value.password)) {
      loginError.password =
        "***Password must contain at least one Special Symbol";
    }
    return loginError;
  };

  return (
    <>
      <Box sx={{ bgcolor: "black", height: "945px" }}>
        <Grid container spacing={2}>
          {/* img-part */}
          <Grid xs={12} xl={8} md={8} sm={12}>
            <Box position={"relative"}>
              <img src={img} alt="Img_part" className="img_part" />
              <Button variant="outlined" className="img_btn">
                Region & Language
              </Button>
            </Box>
          </Grid>

          {/* form-part */}
          <Grid className="login_part" xs={12} xl={4} md={8} sm={12}>
            <Box
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"row"}
              sx={{ marginRight: "30%", marginTop: "20%" }}
            >
              <DiReact fontSize={"60px"} color="#00D796" />
              <Typography
                variant="h3"
                sx={{
                  color: "#00D796",
                  fontWeight: 600,
                }}
              >
                REACT
              </Typography>
            </Box>

            <Box sx={{ color: "white", marginTop: "10%" }}>
              <Typography
                variant="h4"
                sx={{
                  color: "white",
                  fontWeight: 600,
                  marginRight: "26%",
                }}
              >
                Hello Again!
              </Typography>
              <Typography variant="subtitle1" sx={{ marginRight: "39%" }}>
                Welcome Back
              </Typography>
            </Box>
            <form onSubmit={handleLoginsubmit}>
              <Box sx={{ marginTop: "7%" }}>
                <TextField
                  autoComplete="off"
                  variant="filled"
                  color="info"
                  label="email"
                  type="email"
                  name="email"
                  value={loginInput.email}
                  onChange={handleLogin}
                  sx={{ width: "50%", marginRight: "10%" }}
                />
              </Box>
              <Typography
                variant="subtitle1"
                sx={{ color: "#00D796", marginBottom: "6%", marginRight: "7%" }}
              >
                {loginError.email}
              </Typography>
              <Box>
                <TextField
                  variant="filled"
                  color="info"
                  label="password"
                  type="password"
                  name="password"
                  value={loginInput.password}
                  onChange={handleLogin}
                  sx={{ width: "50%", marginRight: "10%" }}
                />
              </Box>
              <Typography
                variant="subtitle1"
                sx={{ color: "#00D796", marginBottom: "6%", marginRight: "7%" }}
              >
                {loginError.password}
              </Typography>
              <Button
                type="submit"
                variant="contained"
                className="button_login"
              >
                Login
              </Button>
            </form>

            <Typography
              variant="subtitle1"
              sx={{ marginTop: "3%", marginRight: "4%" }}
            >
              <Link to={""}>Forgot Password</Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
