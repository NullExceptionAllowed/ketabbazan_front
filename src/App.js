import React from "react";
import Login from "./Components/Login/Login";
import { Route, Switch } from "react-router-dom";
import SignUp from "./Components/SignUp/SignUp";
import Profile from "./Components/Profile/Profile";
import Homepage from './Components/Homepage/Homepage';
import Book from "./Components/Showbookall-search/Showbookall";
import PdfViewer from "./Components/PdfViewer/PdfViewer";
import BookInfo from './Components/Showinfoperbook/bookInfo';
import Article from './Components/Writearticle/article';

const App = () => {
  return (
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup"  component={SignUp} />
        <Route path="/profile"  component={Profile} /> 
        <Route path="/Book"  component={Book} />
        <Route path="/bookinfo/:id"  component={BookInfo} />
        <Route path="/ReadPdf/:id"  component={PdfViewer} />
        <Route path="/article/:id"  component={Article} />
      </Switch>
  );
};
export default App;

