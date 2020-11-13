import React from 'react';
import cn from 'classnames';

import as from '../../App.module.scss';
import ps from './Legendaries.module.scss';

import Footer from '../../components/Footer';
import Layout from '../../components/Layout';

interface LegendariesProps {
  title?: string;
}

const LegendariesPage: React.FC<LegendariesProps> = ({ title }) => {
  return (
    <>
      <Layout className={ps.content__wrapper}>
        <div className={cn(as.container)}>
          <strong>{title}</strong>
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default LegendariesPage;
