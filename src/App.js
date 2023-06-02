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
import ShowProfileuser from './Components/ShowProfileUser/ShowProfile';
import DesignQuiz from "./Components/DesignQuiz/Designquiz";
import AnswerQuiz from "./Components/AnswerQuiz/AnswerQuiz";
import Showbookcategory from "./Components/Showcategorybook/ShowCategory";
import Forgetpass from "./Components/Forgetpass/Forgetpass";
import AboutUs from "./Components/AboutUs/AboutUs";
import Reset from "./Components/Resetpass/Reset";
import NotFound from "./NotFoundPage";
import AdminPanel from "./Components/AdminPanel/AdminPanel";
import comments from "./Components/AdminPanel/Pages/comments";
import Quizz from "./Components/AdminPanel/Pages/Quizz";
import Articles from "./Components/AdminPanel/Pages/Articles";
import RootPanel from "./Components/RootPanel/RootPanel";
import Root_Articles from "./Components/RootPanel/Pages/Root_Articles";
import Root_Quizz from "./Components/RootPanel/Pages/Root_Quizz";
import Root_comments from "./Components/RootPanel/Pages/Root_comments";
import Root_Users from "./Components/RootPanel/Pages/Root_Users";
const App = () => {
  return (
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/login" exact component={Login} />
        <Route path="/forgetpass" exact component={Forgetpass} />
        <Route path="/signup"  component={SignUp} />
        <Route path="/resetpass"  component={Reset} />
        <Route path="/profile"  component={Profile} /> 
        <Route path="/Book"  component={Book} />
        <Route path="/bookinfo/:id"  component={BookInfo} />
        <Route path="/ReadPdf/:id"  component={PdfViewer} />
        <Route path="/article/:id"  component={Article} />
        <Route path="/articleinfo/:id"  component={ArticleInfo} />
        <Route path="/Searchbook"  component={Searchbook} />
        <Route path="/showbook/:id"  component={Showbookcategory} />
        <Route path="/Showallarticle"  component={ShowAllarticle} />
        <Route path="/ShowProfileuser/:id"  component={ShowProfileuser} />
        <Route path="/Designquiz"  component={DesignQuiz} />
        <Route path="/AnswerQuiz/:id"  component={AnswerQuiz} />
        <Route path="/AboutUs"  component={AboutUs} />
        <Route path="/Admin"  component={AdminPanel} />
            <Route path="/Root"  component={RootPanel} />
        <Route path="/Admin_comments"  component={comments} />
        <Route path="/Admin_Quizzes"  component={Quizz} />
        <Route path="/Admin_Articles"  component={Articles} />
            <Route path="/Root_comments"  component={Root_comments} />
            <Route path="/Root_Quizzes"  component={Root_Quizz} />
            <Route path="/Root_Articles"  component={Root_Articles} />
            <Route path="/Root_Users"  component={Root_Users} />
        <Route component={NotFound} />
      </Switch>
  );
};
export default App;

