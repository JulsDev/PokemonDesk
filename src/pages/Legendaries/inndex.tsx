import React from 'react';
import cn from 'classnames';

import as from '../../App.module.scss';
import ps from './Legendaries.module.scss';

const LegendariesPage = () => {
  return (
    <div className={ps.content__wrapper}>
      <div className={cn(as.container)}>
        <strong>Legendaries page</strong>
      </div>
    </div>
  );
};

export default LegendariesPage;
