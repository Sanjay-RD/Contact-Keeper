import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./component/layout/Header";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import "./App.css";

function App() {
  return (
    <Router>
      <Fragment>
        <Header title="Contact Keeper" icon="fa fa-id-card-o" />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
