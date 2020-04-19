import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardWrapper.less';

type Props = {
  children: JSX.Element | string;
};

const CardWrapper: React.FC<Props> = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);

CardWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
};

export default CardWrapper;
