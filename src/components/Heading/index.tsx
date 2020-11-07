import React from 'react';
import cn from 'classnames';

import s from './Heading.module.scss';

interface HeadingProps {
  tag?: keyof JSX.IntrinsicElements;
  propsClassName?: string;
}

const Heading: React.FC<HeadingProps> = ({ children, tag: Head = 'h1', propsClassName }) => {
  return <Head className={cn(s.root, propsClassName)}>{children}</Head>;
};

export default Heading;
