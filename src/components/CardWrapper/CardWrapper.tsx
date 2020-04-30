import React from 'react';
import styles from './CardWrapper.less';

type Props = {
  children: React.ReactElement | string;
};

const CardWrapper: React.FC<Props> = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);

export default CardWrapper;
