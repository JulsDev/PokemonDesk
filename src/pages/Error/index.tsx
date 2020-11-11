import React from 'react';
import { navigate } from 'hookrouter';

import Button, { ButtonSize } from '../../components/Button';
import Heading from '../../components/Heading';

import s from './Error.module.scss';

import errorImg from '../../assets/images/404.png';
import teamRocket from '../../assets/images/Team_Rocket.png';

const ErrorPage = () => {
  function handleClickBtn() {
    navigate('/');
  }

  return (
    <div className={s.errorPageWrap}>
      <div className={s.imagesBlock}>
        <img src={errorImg} alt="404 error pokemon" className={s.errorPic} />
        <img src={teamRocket} alt="team rocket pokemon" className={s.teamRocketPic} />
      </div>
      <div className={s.textBlock}>
        <Heading tag="h2" propsClassName={s.errTitle}>
          <span className={s.errTitleColor}>The rocket team</span>has won this time.
        </Heading>
        <Button onClick={handleClickBtn} type="button" color="yellow" size={ButtonSize.medium}>
          Return
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
