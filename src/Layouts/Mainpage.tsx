import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card/Card';
import Map from '../components/Map/Map';
import styles from './Mainpage.less';

import fetchIP from '../store/actions/fetchIp';

class Mainpage extends Component {
  async componentDidMount() {
    const { fetchData }: any = this.props;

    fetchData();
  }

  render() {
    const { ip, country, provider }: any = this.props;

    return (
      <div className={styles.mainpage}>
        <Card description="Current IP" data={ip} />
        <Card description="Country / Currency" data={country} />
        <Card description="Provider" data={provider} />
        <Map />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  ip: state.app.ip.query,
  country: state.app.ip.country,
  provider: state.app.ip.isp,
});

const mapDispatchToProps = {
  fetchData: fetchIP,
};

export default connect(mapStateToProps, mapDispatchToProps)(Mainpage);
