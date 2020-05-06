import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
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
    const browser = Bowser.parse(window.navigator.userAgent);

    return (
      <Router>
        <ul className={styles.menu}>
          <li className={styles['menu-item']}><Link to="/">About me</Link></li>
          <li className={styles['menu-item']}><Link to="/search">Search</Link></li>
        </ul>
        <div className={styles.mainpage}>
          <Switch>
            <Route path="/search">
              <h2>Search</h2>
            </Route>
            <Route path="/">
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
                data={(
                  <ul>
                    <li>{`Mobile internet / Proxy: ${mobile ? 'Yes' : 'No'} / ${proxy ? 'Yes' : 'No'}`}</li>
                    <li>{`Browser: ${browser.browser.name} ${browser.browser.version}`}</li>
                    <li>{`Operating System: ${browser.os.name} ${browser.os.versionName}`}</li>
                  </ul>
                  )}
              />
            </Route>
          </Switch>
        </div>
      </Router>
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
