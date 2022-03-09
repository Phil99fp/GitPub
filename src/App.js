import React from "react";
import { Home} from "./pages";
import { Route, Switch } from "react-router-dom";
import { Header} from "./layout";
import "./App.css";



function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
