import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import IntroPage from "./IntroPage";
import MainPage from "./MainPage";
import DetailsPage from "./DetailsPage";
import { useCountriesList } from "../contexts/Context";

function App() {
  const countriesArray = useCountriesList();
  console.log(countriesArray);

  return (
    <main>
      <Switch>
        <Route exact path="/" component={IntroPage} />
        <Route path="/mainpage" component={MainPage} />
        <Route exact path="/:destination" component={DetailsPage} />
        {/* <Route exact path="/stocks/:symbol" component={Stock} /> */}
        <Redirect to="/" />
      </Switch>
    </main>
  );
}

export default App;
