import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card/Card';
import Location from '../components/Location/Location';
import styles from './Mainpage.less';

import fetchIP from '../store/actions/fetchIp';

class Mainpage extends Component {
  async componentDidMount() {
    const { fetchData }: any = this.props;

    fetchData();
  }

  render() {
    const {
      ip, country, currency, provider,
    }: any = this.props;

    return (
      <div className={styles.mainpage}>
        <Card description="Current IP" data={ip} />
        <Card description="Country / Currency" data={`${country} / ${currency}`} />
        <Card description="Provider" data={provider} />
        <Location />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  ip: state.data.ip.query,
  country: state.data.ip.country,
  currency: state.data.ip.currency,
  provider: state.data.ip.isp,
});

const mapDispatchToProps = {
  fetchData: fetchIP,
};

export default connect(mapStateToProps, mapDispatchToProps)(Mainpage);
