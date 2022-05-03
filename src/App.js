import React from "react";
import Login from "./Components/Login/Login";
import { Route, Switch } from "react-router-dom";
import SignUp from "./Components/SignUp/SignUp";
import Profile from "./Components/Profile/Profile";
import Homepage from './Components/Homepage/Homepage';
import Book from "./Components/Showbookall/Showbookall";
import PdfViewer from "./Components/PdfViewer/PdfViewer";
import BookInfo from './Components/Showinfoperbook/bookInfo';
import Article from './Components/Writearticle/article';
import ArticleInfo from "./Components/ShowinfoPerarticle/Articleinfo";
import Searchbook from "./Components/Searchbook/Searchbook";
import ShowAllarticle from './Components/ShowAllarticle/ShowAllarticle';


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
        <Route path="/articleinfo/:id"  component={ArticleInfo} />
        <Route path="/Searchbook"  component={Searchbook} />
        <Route path="/Showallarticle"  component={ShowAllarticle} />
      </Switch>
  );
};
export default App;

