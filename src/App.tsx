import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import s from './App.module.scss';

import Header from './components/Header/Header';
import HomePage from './pages/Home';
import LegendariesPage from './pages/Legendaries/inndex';
import PokedexPage from './pages/Pokedex';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div className={s.wrapper}>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/pokedex" component={PokedexPage} />
          <Route exact path="/legendaries" component={LegendariesPage} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
