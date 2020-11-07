import React, { useState, useEffect } from 'react';

import s from './Parallax.module.scss';

import cloudSmall from '../../assets/images/cloudSmall.png';
import cloudBig from '../../assets/images/cloudBig.png';
import PokeBall1 from '../../assets/images/PokeBall1.png';
import Pokeball2 from '../../assets/images/Pokeball2.png';
import PikachuPng from '../../assets/images/pikachu.png';

const Parallax = () => {
  const [screenX, setScreenX] = useState(0);
  const [screenY, setScreenY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setScreenX(event.screenX);
      setScreenY(event.screenY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // отписываемся от события, чтобы не переполнять стек
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [screenX, screenY]);

  return (
    <div className={s.root}>
      <div className={s.smallPokeBall} style={{ transform: `translate(${screenY * 0.01}px, ${screenX * 0.01}px)` }}>
        <img src={PokeBall1} alt="small PokeBall" />
      </div>
      <div className={s.cloud} style={{ transform: `translate(${screenY * 0.02}px, ${screenX * 0.05}px)` }}>
        <img src={cloudBig} alt="big cloud" />
      </div>
      <div className={s.cloudBig} style={{ transform: `translate(${screenY * 0.02}px, ${screenX * 0.05}px)` }}>
        <img src={cloudSmall} alt="small cloud" />
      </div>

      <div className={s.pokeBall} style={{ transform: `translate(${screenY * 0.04}px, ${screenX * 0.02}px)` }}>
        <img src={Pokeball2} alt="big PokeBall" />
      </div>
      <div className={s.pikachu} style={{ transform: `translate(${screenY * 0.03}px, ${screenX * 0.05}px)` }}>
        <img src={PikachuPng} alt="pikachu PokeBall" />
      </div>
    </div>
  );
};

export default Parallax;
