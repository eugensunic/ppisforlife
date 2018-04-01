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

@connect(store => {
  return {
    navbar: store.nav,
    bar_change: store.bar_change
  };
})
export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { radio1: true, radio2: false, radio3: false, first_check: false };
  }
  componentDidMount() {}

  render() {
    return (
      <div className="container">
        <Navbar />

        <Link to={this.props.match.url}>
          <span className={this.state.radio1 ? 'radio_clicked' : 'radio_normal'} onClick={() => this.setState({ radio1: true, radio2: false, radio3: false })}>
            Patient
          </span>
        </Link>

        <Link to={this.props.match.url + '/doctorPost'}>
          <span className={this.state.radio2 ? 'radio_clicked' : 'radio_normal'} onClick={() => this.setState({ radio1: false, radio2: true, radio3: false })}>
            Doctor
          </span>
        </Link>

        <Link to={this.props.match.url + `/pharmaPost`}>
          <span className={this.state.radio3 ? 'radio_clicked' : 'radio_normal'} onClick={() => this.setState({ radio1: false, radio2: false, radio3: true })}>
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
