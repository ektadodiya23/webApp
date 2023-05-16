import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Page.style.css";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import regImg from "../Component/Img/home-img.png";
import DialogReg from "./DialogReg";
import { IarrayData } from "./DataType";
import { error } from "console";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Register() {
  const initialValue: IarrayData = {
    email: "",
    userName: "",
    Firstname: "",
    Lastname: "",
    Number: "",
    Password: "",
    confirmPass: "",
  };

  const [inputValue, setinputValue] = useState(initialValue);
  const [inputError, setinputError] = useState<any>({});
  const [isSubmit, setisSubmit] = useState(false);

  const [openPolicy, setOpenPolicy] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpenPolicy(true);
  };

  const regPolicyclose = () => {
    setOpenPolicy(false);
  };

  const handleChangeInput = (e: any) => {
    const { name, value } = e.target;
    setinputValue({ ...inputValue, [name]: value });
  };

  // reDirect login_page
  const handleSubmit = (e: any) => {
    e.preventDefault();

    setinputError(handleValidation(inputValue));
    setisSubmit(true);
    console.log(inputValue);
  };

  useEffect(() => {
    console.log(Object.keys(inputError).length);
    if (Object.keys(inputError).length === 0 && isSubmit) {
     
      console.log("done", inputValue);
      navigate("/login");
    }
  }, [inputError]);

  const handleValidation = (value: any) => {
    const errors: any = {};
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const letter = /^[a-zA-Z]+$/i;
    const Uppercase = /^(?=.*[A-Z]).*$/;
    const ContainsNumber = /^(?=.*[0-9]).*$/;
    const specialSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;

    // email_validation
    if (!value.email) {
      errors.email = "***Email is required!";
    } else if (!regexEmail.test(value.email)) {
      errors.email = "***This is not a valid email format !";
    }

    // username_validation
    if (!value.userName) {
      errors.userName = "***userName is required !";
    } else if (!letter.test(value.userName)) {
      errors.userName = "***Only letters required!";
    } else if (!Uppercase.test(value.userName)) {
      errors.userName =
        "***Username must have at least one uppercase characters!";
    }
    // firstname  & lastname validation
    if (!value.Firstname) {
      errors.Firstname = "***Both feild are required!";
    }

    // number validation
    if (!value.Number) {
      errors.Number = "***number is required !";
    }

    //password validation
    if (!value.Password) {
      errors.Password = "***password is required!";
    } else if (value.Password.length < 4) {
      errors.Password = "***Password must be more then 4 characters";
    } else if (value.Password.length > 10) {
      errors.Password = "***Password cannot exceed more then 10 characters";
    } else if (!Uppercase.test(value.Password)) {
      errors.Password =
        "***Password must have at least one uppercase characters!";
    } else if (!ContainsNumber.test(value.Password)) {
      errors.Password = "***Password must contain at least one Digit.";
    } else if (!specialSymbol.test(value.Password)) {
      errors.Password = "***Password must contain at least one Special Symbol";
    }

    // confirm_password validation
    if (!value.confirmPass) {
      errors.confirmPass = "***Confirm password is required!";
    } else if (value.confirmPass !== value.Password) {
      errors.confirmPass = "***password not matched !";
    }

    // checkbox_validation
    return errors;
  };

  return (
    <>
      <Box
      className = "reg_box"
        sx={{
          bgcolor: "black",
          height: "937px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xl={6} sm={12} md={6} xs={12}>
            <Box position={"relative"}>
              <img src={regImg} alt="reg_img" className="reg_img" />
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "20px" }}
                className="Reg_text"
              >
                Already have an account?
                <span>
                  <Link to={"/login"}>Login</Link>
                </span>
              </Typography>
            </Box>
          </Grid>
          <Grid className="form_part" item xl={6} sm={12} md={6} xs={12}>
            <Box  className="reg_title" sx={{ marginTop: "3%" , textAlign:"center" }}>
              <Typography variant="h4" >New user</Typography>
              <Typography className="reg_head" variant="h2" sx={{ fontWeight: "700" }}>
                Registration
              </Typography>

              <form onSubmit={handleSubmit}>
                {/* email */}
                <Box sx={{ marginTop: "4%" }}>
                  <TextField
                    autoComplete="off"
                    variant="filled"
                    color="info"
                    label="email"
                    type="email"
                    sx={{ width: "50%" }}
                    name="email"
                    value={inputValue.email}
                    onChange={handleChangeInput}
                  />
                </Box>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#00D796", marginBottom: "2%" }}
                >
                  {inputError.email}
                </Typography>

                {/* username */}
                <Box>
                  <TextField
                    autoComplete="off"
                    variant="filled"
                    color="info"
                    label="Username"
                    type="text"
                    sx={{ width: "50%" }}
                    name="userName"
                    value={inputValue.userName}
                    onChange={handleChangeInput}
                  />
                </Box>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#00D796", marginBottom: "2%" }}
                >
                  {inputError.userName}
                </Typography>

                {/* name */}
                <Box>
                  <TextField
                    autoComplete="off"
                    variant="filled"
                    color="info"
                    type="text"
                    label="Firstname"
                    sx={{ width: "25%" }}
                    name="Firstname"
                    value={inputValue.Firstname}
                    onChange={handleChangeInput}
                  />
                  <TextField
                    autoComplete="off"
                    variant="filled"
                    color="info"
                    type="text"
                    label="Lastname"
                    name="Lastname"
                    sx={{ width: "25%", marginLeft: "6px" }}
                    value={inputValue.Lastname}
                    onChange={handleChangeInput}
                  />
                </Box>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#00D796", marginBottom: "2%" }}
                >
                  {inputError.Firstname}
                </Typography>

                {/* number */}
                <Box>
                  <TextField
                    variant="filled"
                    type="number"
                    color="info"
                    label="Number"
                    name="Number"
                    sx={{ width: "50%" }}
                    value={inputValue.Number}
                    onChange={handleChangeInput}
                  />
                </Box>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#00D796", marginBottom: "2%" }}
                >
                  {inputError.Number}
                </Typography>

                {/* password */}
                <Box>
                  <TextField
                    variant="filled"
                    color="info"
                    label="Password"
                    type="password"
                    sx={{ width: "50%" }}
                    name="Password"
                    value={inputValue.Password}
                    onChange={handleChangeInput}
                  />
                </Box>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#00D796", marginBottom: "2%" }}
                >
                  {inputError.Password}
                </Typography>

                {/* confirm-password */}
                <Box>
                  <TextField
                    variant="filled"
                    color="info"
                    label=" Confirm Password"
                    type="password"
                    sx={{ width: "50%" }}
                    name="confirmPass"
                    value={inputValue.confirmPass}
                    onChange={handleChangeInput}
                  />
                </Box>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#00D796", marginBottom: "2%" }}
                >
                  {inputError.confirmPass}
                </Typography>

                {/* check-box */}
                <Box>
                  <Checkbox {...label} />
                  <span>
                    I agree all statements in
                    <span className="policy_para" onClick={handleOpen}>
                      Terms of service
                    </span>
                  </span>
                </Box>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "red", marginBottom: "2%" }}
                ></Typography>

                {/* button */}
                <Button
                  type="submit"
                  className="reg_btn"
                  sx={{
                    marginLeft: "35%",
                    padding: "12px",
                    bgcolor: "#00D796",
                  }}
                  variant="contained"
                >
                  Register
                </Button>
              </form>
            </Box>
          </Grid>
        </Grid>

        <DialogReg openDialog={openPolicy} handleClosePolicy={regPolicyclose} />
      </Box>
    </>
  );
}
