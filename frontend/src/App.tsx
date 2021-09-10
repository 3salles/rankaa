import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Athletics } from './pages/Athletics';

import { Home } from './pages/Home';
import { Modalities } from './pages/Modalities';

import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route  path="/modalities" exact component={Modalities} />
      <Route  path="/athletics" exact component={Athletics} />
    </Switch>
    </BrowserRouter>
    </>
  );
}

