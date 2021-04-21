import React, { FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createClient } from "@urql/core";
import { Provider } from "urql";

const client = createClient({
  url: "/graphql",
});

const App: FC = () => (
  <Provider value={client}>
    <Router>👋</Router>
  </Provider>
);

export default App;
