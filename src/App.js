import React from "react";
import Login from "./Components/Login/Login";
import { Route, Switch } from "react-router-dom";
import SignUp from "./Components/SignUp/SignUp";
import Header from "./Components/Header/Header";
import { Router } from "react-router";
import Profile from "./Components/Profile/Profile";
import Nav from "./Components/Navbar/Nav";
import BasicGrid1 from "./Components/emtehani/emtehani";
import Emtehani from "./Components/emtehani/emtehani";


const App = () => {
  return (
    <Emtehani/>
      // <Switch>
      //   <Route path="/" exact component={Nav} />
      //   <Route path="/login" exact component={Login} />
      //   <Route path="/signup"  component={SignUp} />
      //   <Route path="/profile"  component={Profile} />
      // </Switch>
  );
};
export default App;

