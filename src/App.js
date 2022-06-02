import React from "react";
import Home from "./Pages/home/Home";
import Topbar from "./comp/Topbar/Topbar";
import SinglePostPage from "./Pages/SinglePostPage/SinglePostPage";

import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/home" >   <Home/>    </Route>
        <Route path="/post/:id">  <SinglePostPage />  </Route>
      </Switch>
    </Router>

  );
}

export default App;
