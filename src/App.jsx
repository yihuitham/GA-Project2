import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import IntroductionPage from "./pages/IntroductionPage";
import MainPage from "./pages/MainPage";
import InformationPage from "./pages/InformationPage";

function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={IntroductionPage} />
        <Route path="/mainpage" component={MainPage} />
        <Route exact path="/:destination" component={InformationPage} />
        <Redirect to="/" />
      </Switch>
    </main>
  );
}

export default App;
