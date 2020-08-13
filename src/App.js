import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Mainmenu from "./layouts/Mainmenu";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Categories from "./components/Categories";
import Support from "./components/Support";
import Page404 from "./layouts/Page404";
import BlogView from "./components/BlogView";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Router>
        <Mainmenu></Mainmenu>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/blogs" component={Blogs}></Route>
          <Route exact path="/categories" component={Categories}></Route>
          <Route exact path="/support" component={Support}></Route>
          <Route exact path="/blogview" component={BlogView}></Route>
          <Route component={Page404}></Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
