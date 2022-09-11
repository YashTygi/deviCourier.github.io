import React, { Component } from "react";
import { HashRouter as Router, Route} from "react-router-dom";
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <Router>
            <Route exact path="/sign-up" component={SignUpForm} />
            <Route path="/sign-in" component={SignInForm} />
      </Router>
    );
  }
}

export default App;
