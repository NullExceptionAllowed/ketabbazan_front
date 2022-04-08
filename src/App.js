import React from "react";
import Login from "./Components/Login/Login";
import { Route, Switch } from "react-router-dom";
import SignUp from "./Components/SignUp/SignUp";
import Profile from "./Components/Profile/Profile";
import Homepage from './Components/Homepage/Homepage';
import Showbookall from "./Components/Showbookall/Showbookall";
import Showinfo from "./Components/Showinfoperbook/Showinfobook";



const App = () => {
  return (
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup"  component={SignUp} />
        <Route path="/profile"  component={Profile} />
        <Route path="/Showbookall"  component={Showbookall} />
        <Route path="/Showbookinfo/:id"  component={Showinfo} />
      </Switch>
  );
};
export default App;

