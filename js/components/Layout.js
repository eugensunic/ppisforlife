import React from 'react';
import { connect } from 'react-redux';

import Postheaderfirst from './Postheaderfirst';
import Postheadersecond from './Postheadersecond';
import Postmain from './Postmain';
import Postfooter from './Postfooter';
import Patientpost from './Patientpost.js';
import Doctorpost from './Doctorpost.js';
import Pharmapost from './Pharmapost.js';
import Navbar from './Navbar.js';
import Navfooter from './Navfooter.js';
import Newstats from './Newstats/Newstats.js';
import Social from './Social.js';
import { withRouter, Route, Router, Link } from 'react-router-dom';
import store from '../store';
import * as user from './Function.js';
import * as user2 from '../actions/asyncCAll.js';
//
@connect(store => {
  return {
    navbar: store.nav,
    bar_change: store.bar_change,
    color_navigation: store.color_navigation
  };
})
export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    return (
      <div className="container">
        <Navbar />

        <Link to={this.props.match.url} replace>
          <span
            className={this.props.color_navigation.post_navigation[0] ? 'radio_clicked disable_upper_container' : 'radio_normal'}
            onClick={() => {
              this.props.dispatch(user2.changeNavigationColor('post-nav', [true, false, false]));
            }}>
            Patient
          </span>
        </Link>

        <Link to={this.props.match.url + '/doctorPost'} replace>
          <span
            className={this.props.color_navigation.post_navigation[1] ? 'radio_clicked disable_upper_container' : 'radio_normal'}
            onClick={() => {
              console.log(this);
              window.location.href.indexOf('/doctorPost') > -1 ? this.props.dispatch(user2.changeNavigationColor('post-nav', [false, true, false])) : '';
            }}>
            Doctor
          </span>
        </Link>

        <Link to={this.props.match.url + `/pharmaPost`} replace>
          <span
            className={this.props.color_navigation.post_navigation[2] ? 'radio_clicked disable_upper_container' : 'radio_normal'}
            onClick={() => {
              this.props.dispatch(user2.changeNavigationColor('post-nav', [false, false, true]));
            }}>
            Pharma
          </span>
        </Link>

        <Route exact path={this.props.match.url} component={Patientpost} />
        <Route path={this.props.match.url + '/doctorPost'} component={Doctorpost} />
        <Route path={this.props.match.url + '/pharmaPost'} component={Pharmapost} />

        <Navfooter />
      </div>
    );
  }
}
