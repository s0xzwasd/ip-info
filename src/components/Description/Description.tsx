import React from 'react';
import PropTypes from 'prop-types';
import styles from './Description.less';

type Props = {
  children: string;
};

const Description: React.FC<Props> = ({ children }) => (
  <p className={styles.description}>{children}</p>
);

Description.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Description;
