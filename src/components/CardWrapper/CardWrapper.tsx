import React from 'react';
import styles from './CardWrapper.less';

type Props = {
  children: React.ReactElement | string;
  large?: boolean;
};

const CardWrapper: React.FC<Props> = ({ children, large }) => (
  <div className={`${styles.wrapper} ${large ? styles.large : null}`}>{children}</div>
);

export default CardWrapper;
