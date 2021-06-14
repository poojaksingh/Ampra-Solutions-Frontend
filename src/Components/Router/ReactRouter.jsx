import { Route, BrowserRouter, Switch, Redirect, Link } from "react-router-dom";
import Home from "../Home/Home";


// ROUTES
import SignIn from "../New Sign In/NewSignIn";
import SignUp from "../Sign Up/SignUp";

function ReactRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/Home" component={Home} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default ReactRouter;
