import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AthleticList } from "./pages/admin/Athletics";
import { GamesList } from "./pages/admin/Games";
import { ModalitiesList } from "./pages/admin/Modalities";
import { NewAthletic } from "./pages/admin/NewAthletic";
import { Athletic } from "./pages/Athletic";
import { Athletics } from "./pages/Athletics";
import { Login } from "./pages/auth/Login";
import { Register } from "./pages/auth/Register";

import { Home } from "./pages/Home";
import { Modalities } from "./pages/Modalities";

import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/modalities" exact component={Modalities} />
          <Route path="/athletics" exact component={Athletics} />
          <Route path="/athletic/:id" exact component={Athletic} />
          <Route path="/auth/signin" exact component={Login} />
          <Route path="/auth/signup" exact component={Register} />
          <Route path="/admin/athletics" exact component={AthleticList} />
          <Route path="/admin/athletics/new" exact component={NewAthletic} />
          <Route path="/admin/modalities" exact component={ModalitiesList} />
          <Route path="/admin/games" exact component={GamesList} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
