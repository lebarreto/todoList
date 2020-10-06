import React from "react";
import { Switch, Route } from "react-router-dom";

import GlobalStyles from "../global/styles";
import ToDo from "../pages/ToDo";

function Routes() {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route path="/" component={ToDo} />
      </Switch>
    </>
  );
}

export default Routes;
