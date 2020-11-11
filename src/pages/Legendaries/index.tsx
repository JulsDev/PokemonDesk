import React from 'react';
import cn from 'classnames';

import as from '../../App.module.scss';
import ps from './Legendaries.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface LegendariesProps {
  title?: string;
}

const LegendariesPage: React.FC<LegendariesProps> = ({ title }) => {
  return (
    <>
      <Header />
      <div className={ps.content__wrapper}>
        <div className={cn(as.container)}>
          <strong>{title}</strong>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LegendariesPage;
