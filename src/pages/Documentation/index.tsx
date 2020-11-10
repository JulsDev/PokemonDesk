import React from 'react';
import cn from 'classnames';

import as from '../../App.module.scss';
import ps from './Document.module.scss';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface DocumentProps {
  title?: string;
}

const DocumentationPage: React.FC<DocumentProps> = ({ title }) => {
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

export default DocumentationPage;
