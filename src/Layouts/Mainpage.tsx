import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card/Card';
import Location from '../components/Location/Location';
import styles from './Mainpage.less';

import fetchIP from '../store/actions/fetchIp';

type StateFromProps = {
  ip: string;
  country: string;
  currency: string;
  provider: string;
  fetchData?: Function;
};

type DispatchFromProps = {
  fetchData: Function;
};

class Mainpage extends Component<StateFromProps> {
  async componentDidMount(): Promise<void> {
    const { fetchData } = this.props;

    if (fetchData) {
      fetchData();
    }
  }

  render() {
    const {
      ip, country, currency, provider,
    } = this.props;

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

const mapStateToProps = (state: any): StateFromProps => ({
  ip: state.data.ip.query,
  country: state.data.ip.country,
  currency: state.data.ip.currency,
  provider: state.data.ip.isp,
});

const mapDispatchToProps: DispatchFromProps = {
  fetchData: fetchIP,
};

export default connect<StateFromProps, DispatchFromProps>(
  mapStateToProps,
  mapDispatchToProps,
)(Mainpage);
