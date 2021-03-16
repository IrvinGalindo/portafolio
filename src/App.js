import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div className="app">
      <Switch>
        {/*Nav*/}
        <Route to="/">
          <Banner />
          <div className="app__categories">
            <Skills />
            <Projects />
          </div>
        </Route>
        {/*My strongness*/}
        {/*portafolio*/}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
