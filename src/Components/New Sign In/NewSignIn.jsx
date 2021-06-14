import { useState } from "react";
import validator from "validator";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import {
  EmailOutlined,
  LockOutlined,
  VisibilityOff,
  Visibility,
  
} from "@material-ui/icons";
import Axios from "axios";
import { toast } from "react-toastify";
import logo from "../../Assets/logoR.png";
import { Link, useHistory } from "react-router-dom";
import "./NewSignIn.css";

function NewSignIn() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Errors
  const [emailError, setEmailError] = useState(false);
  const [emailErrMessage, setEmailErrMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const _onChangeEmail = (email) => {
    setEmail(email);
    let validate = validator.isEmail(email);//checks if is email
    setEmailError(!validate);
    setEmailErrMessage(validate ? "" : "Enter valid email");
  };

  const _onChangePassword = (password) => {
    setPassword(password);
    let validate = validator.isEmpty(password);
    setPasswordError(validate);
  };

  const _SignIn = async () => {
    let emailErr,
      passwordErr = false;

    if (validator.isEmpty(email)) {
      setEmailError(true);
      setEmailErrMessage("Required");
      emailErr = true;
    }

    if (validator.isEmpty(password)) {
      setPasswordError(true);
      passwordErr = true;
    }

    if (emailErr || passwordErr) {
      return;//Fun will dead here 
    }

    let { data } = await Axios.post("http://localhost:5000/users/login", {
      email,
      password,
    });
    if (data.status === 200) {
       toast.success("Successfully Login")
       history.push({ pathname: "/Home",
       state:{user:data}
       });
     
    } else {
      toast.error("Invalid Credenials");
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

      {/* Sign In Area */}
      <div className="signup-background">
        <div className="text-center">
          <h1 className="font-weight-bolder pt-4">Sign In</h1>
          <h4>To start using app</h4>
          <div className="container">
            {/* Form */}
            <div className="row my-5">
              <div className="col-sm-12">
                <TextField
                  className="w-50"
                  label="Enter Email Id"
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
            </div>
            <div className="row">
              <div className="col-sm-12">
                <TextField
                  className="w-50"
                  label="Enter Password"
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
            {/* Form */}

            {/* Submit Button */}
            <div className="text-center mt-5">
              <button
                className="btn text-white font-weight-bolder"
                style={{
                  backgroundColor: "#001b30",
                  width: "200px",
                  borderRadius: "20px",
                }}
                onClick={_SignIn}
              
              >
                Sign In
              </button>
            </div>
            {/* Submit Button */}
            <div className="text-center mt-5">
              <h5>
                <span className="text-black-50">Not a member ? </span>
                <Link to="/signup" style={{ color: "#001b30" }}>
                  Sign up
                </Link>
              </h5>
            </div>
          </div>
        </div>
      </div>
      {/* Sign In Area */}
    </div>
  );
}

export default NewSignIn;
