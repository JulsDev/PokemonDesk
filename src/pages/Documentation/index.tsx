import React from 'react';
import cn from 'classnames';

import as from '../../App.module.scss';
import ps from './Document.module.scss';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';

interface DocumentProps {
  title?: string;
}

const DocumentationPage: React.FC<DocumentProps> = ({ title }) => {
  return (
    <>
      <Header />
      <Layout className={ps.content__wrapper}>
        <div className={cn(as.container)}>
          <strong>{title}</strong>
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default DocumentationPage;
