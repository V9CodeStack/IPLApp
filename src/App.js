// FIX1: To use Switch component, it should be imported
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import NotFound from "./components/NotFound";
import TeamMatches from "./components/TeamMatches";

import "./App.css";

const App = () => (
  // FIX2: Routes should be wrapped with Switch component from react-router-dom
  <BrowserRouter>
    <Switch>
      <Route exact path="/IPLApp" component={Home} />
      <Route path="/team-matches/:id" component={TeamMatches} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
