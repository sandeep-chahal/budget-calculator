import React from "react";
import "./App.scss";

import { Route } from "react-router-dom";
import BudgetCalculator from "./budget calculator/BudgetCalculator";
import Auth from "./Auth/Auth";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <BudgetCalculator />
      </Route>
      <Route exact path="/auth">
        <Auth />
      </Route>
    </div>
  );
}

export default App;
