import React from 'react';

import s from './App.module.scss';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './pages/Home';

const App = () => {
  return (
    <div className={s.wrapper}>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
};

export default App;
