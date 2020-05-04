import React, { Component } from 'react';
import Bowser from 'bowser';
import { connect } from 'react-redux';
import Card from '../components/Card/Card';
import Location from '../components/Location/Location';
import styles from './Mainpage.less';

import fetchIP from '../store/actions/fetchIp';
import Spinner from '../components/Spinner/Spinner';

type StateFromProps = {
  ip: string;
  country: string;
  currency: string;
  provider: string;
  mobile: boolean;
  proxy: boolean;
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
      ip, country, currency, provider, mobile, proxy,
    } = this.props;
    const bowser = Bowser.parse(window.navigator.userAgent);

    return (
      <div className={styles.mainpage}>
        <Card description="Current IP" data={ip} />
        <Card
          description="Country / Currency"
          data={country && currency ? `${country} / ${currency}` : <Spinner />}
        />
        <Card description="Provider" data={provider} />
        <Location />
        <Card
          className={styles['large-card']}
          large
          data={`
            Mobile internet / Proxy: ${mobile ? 'Yes' : 'No'} / ${proxy ? 'Yes' : 'No'}\n
            Browser: ${bowser.browser.name} ${bowser.browser.version}\n
            Operating System: ${bowser.os.name} ${bowser.os.versionName}
          `}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: any): StateFromProps => ({
  ip: state.data.ip.query,
  country: state.data.ip.country,
  currency: state.data.ip.currency,
  provider: state.data.ip.isp,
  mobile: state.data.ip.mobile,
  proxy: state.data.ip.proxy,
});

const mapDispatchToProps: DispatchFromProps = {
  fetchData: fetchIP,
};

export default connect<StateFromProps, DispatchFromProps>(
  mapStateToProps,
  mapDispatchToProps,
)(Mainpage);
