import React from 'react';
import Card from '../components/Card/Card';
import styles from './Mainpage.less';

const Mainpage = () => (
  <div className={styles.mainpage}>
    <Card description="Current IP" data="192.168.1.1" />
    <Card description="Country / Currency" data="Finland" />
    <Card description="Provider" data="SE ONLINE ETC." />
  </div>
);

export default Mainpage;
