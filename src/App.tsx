import React from 'react';

import s from './App.module.scss';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className={s.wrapper}>
      <Header />
      <div className={s.content__wrapper}>
        <div className={s.container}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem doloribus hic harum, voluptates sapiente
          voluptatibus ullam ratione. Dicta nihil voluptas nisi doloremque necessitatibus architecto obcaecati culpa,
          adipisci rem laboriosam! Voluptates.
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
