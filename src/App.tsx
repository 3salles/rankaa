import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';

import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}></Route>
    </Switch>
    </BrowserRouter>
    </>
  );
}

