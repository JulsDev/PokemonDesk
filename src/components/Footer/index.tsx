/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import cn from 'classnames';

import s from './Footer.module.scss';
import c from '../../App.module.scss';

export default function Footer() {
  return (
    <footer className={s.footer__wrapper}>
      <div className={cn(c.container, s.footer__content)}>
        <span role="img" aria-label="heart">
          Make with ❤️
        </span>
        <div>Ours Team</div>
      </div>
    </footer>
  );
}
