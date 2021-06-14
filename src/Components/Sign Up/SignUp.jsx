import { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import {
  PersonOutlined,
  EmailOutlined,
  LockOutlined,
  VisibilityOff,
  Visibility,
} from "@material-ui/icons";

import logo from "../../Assets/logoR.png";
import { Link, useHistory } from "react-router-dom";
import Axios from "axios";
import validator from "validator";
import { toast } from "react-toastify";
import "./SignUp.css";


function SignUp() {
  const history = useHistory();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(false);

  // Errors
  const [fnameError, setFnameError] = useState(false);
  const [lnameError, setLnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailErrMessage, setEmailErrMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const _onChangeFname = (fname) => {
    setFname(fname);
    let validate = validator.isEmpty(fname);
    setFnameError(validate);
  };

  const _onChangeLname = (lname) => {
    setLname(lname);
    let validate = validator.isEmpty(lname);
    setLnameError(validate);
  };

  
  const _onChangeEmail = (email) => {
    setEmail(email);
    let validate = validator.isEmail(email);
    setEmailError(!validate);
    setEmailErrMessage(validate ? "" : "Enter valid email");
  };

  const _onChangePassword = (password) => {
    setPassword(password);
    let validate = validator.isEmpty(password);
    setPasswordError(validate);
  };

  const _SignUp = async () => {
    let emailErr,
      passwordErr,
      fnameErr,
      lnameErr = false;
      

    if (validator.isEmpty(email)) {
      setEmailError(true);
      setEmailErrMessage("Required");
      emailErr = true;
    }
    if (validator.isEmpty(fname)) {
      setFnameError(true);
      fnameErr = true;
    }
    if (validator.isEmpty(lname)) {
      setLnameError(true);
      lnameErr = true;
    }
   
    if (validator.isEmpty(password)) {
      setPasswordError(true);
      passwordErr = true;
    }

    if (
      fnameErr ||
      lnameErr ||
      passwordErr ||
      emailErr
    ) {
      return;
    }

    setDisableSubmit(true);
    let { data } = await Axios.post("http://localhost:5000/users/register", {
      fname,
      lname,
      email,
      password,
     
    });
    if (data.status === 200) {
      toast.success(data.message);
      setTimeout(() => {
        history.push({ pathname: "/" });
      }, 3000);
    } else {
      toast.error(data.message);
      setDisableSubmit(false);
    }
  };

  return (
    <div className="background">
      {/* Top Logo Area */}
      <div className="text-center text-white py-4">
        <img style={{ width: "120px", height: "80px" }} src={logo} alt="logo" />
        <h3>
          <b>WELCOME</b>
        </h3>
      </div>
      {/* Top Logo Area */}

      {/* Sign Up Area */}
      <div className="signup-background">
        <div className="text-center py-3">
          <h1 className="font-weight-bolder">Sign Up</h1>
          <h4>To be a member</h4>
        </div>

        {/* Form */}
        <div className="container">
          <div className="row text-center py-3">
            <div className="col-sm-6">
              <TextField
                className="w-75"
                label="First Name"
                value={fname}
                onChange={(e) => _onChangeFname(e.target.value)}
                placeholder="First Name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonOutlined />
                    </InputAdornment>
                  ),
                }}
                error={fnameError}
                helperText={fnameError ? "Required" : ""}
              />
            </div>
            <div className="col-sm-6">
              <TextField
                className="w-75"
                label="Last Name"
                value={lname}
                onChange={(e) => _onChangeLname(e.target.value)}
                placeholder="Last Name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonOutlined />
                    </InputAdornment>
                  ),
                }}
                error={lnameError}
                helperText={lnameError ? "Required" : ""}
              />
            </div>
          </div>

          <div className="row text-center py-5">
           
            <div className="col-sm-6">
              <TextField
                className="w-75"
                label="Email"
                value={email}
                onChange={(e) => _onChangeEmail(e.target.value)}
                placeholder="Email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutlined />
                    </InputAdornment>
                  ),
                }}
                error={emailError}
                helperText={emailErrMessage}
              />
            </div>
            <div className="col-sm-6">
              <TextField
                className="w-75"
                label="Password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => _onChangePassword(e.target.value)}
                placeholder="Password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlined />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        onMouseDown={(e) => e.preventDefault()}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                error={passwordError}
                helperText={passwordError ? "Required" : ""}
              />
            </div>

          </div>

          
        </div>
        {/* Form */}

        {/* Submit Button */}
        <div className="text-center mt-3">
          <button
            disabled={disableSubmit}
            className="btn text-white font-weight-bolder"
            style={{
              backgroundColor: "#001b30",
              width: "200px",
              borderRadius: "20px",
            }}
            onClick={_SignUp}
          >
            Submit
          </button>
        </div>
        {/* Submit Button */}

        <div className="text-center mt-5">
          <h5>
            <span className="text-black-50">Already a member ? </span>
            <Link to="/" style={{ color: "#001b30" }}>
              Sign In
            </Link>
          </h5>
        </div>
      </div>
      {/* Sign Up Area */}
    </div>
  );
}

export default SignUp;
