import React from 'react';
import styles from './Description.less';

type Props = {
  children: string;
};

const Description: React.FC<Props> = ({ children }) => (
  <p className={styles.description}>{children}</p>
);

export default Description;
