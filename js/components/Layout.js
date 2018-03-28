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
  componentDidMount() {
    // PATIENT
    if (window.location.href.includes('?patient')) {
      if (window.location.href.includes('1')) {
        console.log('THIS IS NEXT pharma VALUE: ' + this.props.bar_change.next_patient);
        // 0
        //0,1   1
        //1,2   2
        //2,3   3
        //3,4   4
        //5     ...
        //4,6
        this.callButtonDataPatient(0, 1, 'stop');
      }
      if (window.location.href.includes('2')) {
        console.log('THIS IS NEXT pharma VALUE: ' + this.props.bar_change.next_patient);
        this.callButtonDataPatient(1, 2, 'stop');
      }
      if (window.location.href.includes('3')) {
        console.log('THIS IS NEXT pharma VALUE: ' + this.props.bar_change.next_patient);

        this.callButtonDataPatient(2, 3, 'stop');
      }
      if (window.location.href.includes('4')) {
        console.log('THIS IS NEXT pharma VALUE: ' + this.props.bar_change.next_patient);
        console.log('should have gone here');
        this.callButtonDataPatient(3, 4, 'stop');
      }
      // The rest
      //------------------------------------------

      if (user.checkNumber(window.location.href[window.location.href.length - 1], 5, 1300)) {
        console.log('THIS IS NEXT pharma VALUE: ' + this.props.bar_change.next_patient);
        this.callButtonDataPatient(0, 1, 'stop');
      }
      if (user.checkNumber(window.location.href[window.location.href.length - 1], 6, 1300)) {
        console.log('THIS IS NEXT pharma VALUE: ' + this.props.bar_change.next_patient);
        this.callButtonDataPatient(1, 2, 'stop');
      }
      if (user.checkNumber(window.location.href[window.location.href.length - 1], 7, 1300)) {
        console.log('THIS IS NEXT pharma VALUE: ' + this.props.bar_change.next_patient);
        this.callButtonDataPatient(2, 3, 'stop');
      }
      if (user.checkNumber(window.location.href[window.location.href.length - 1], 8, 1300)) {
        console.log('THIS IS NEXT pharma VALUE: ' + this.props.bar_change.next_patient);
        console.log('went here');
        this.callButtonDataPatient(3, 4, 'stop');
      }
      if (user.checkNumber(window.location.href[window.location.href.length - 1], 9, 1300)) {
        console.log('THIS IS NEXT pharma VALUE: ' + this.props.bar_change.next_patient);
        user.barChange(
          this.props.bar_change.array_patient[5],
          this.props.bar_change.array_patient,
          this.props.bar_change.next_patient,
          'bar_change_patient',
          'patient_bar_send',
          'stop'
        );
      } // DOCTOR SECTION
    } else if (window.location.href.includes('?doctor')) {
      if (window.location.href.includes('1')) {
        console.log('THIS IS NEXT pharma VALUE: ' + this.props.bar_change.next_doctor);
        // 0
        //0,1   1
        //1,2   2
        //2,3   3
        //3,4   4
        //5     ...
        //4,6
        this.callButtonDataDoctor(0, 1, 'stop');
      }
      if (window.location.href.includes('2')) {
        console.log('THIS IS NEXT pharma VALUE: ' + this.props.bar_change.next_doctor);
        this.callButtonDataDoctor(1, 2, 'stop');
      }
      if (window.location.href.includes('3')) {
        console.log('THIS IS NEXT pharma VALUE: ' + this.props.bar_change.next_doctor);

        this.callButtonDataDoctor(2, 3, 'stop');
      }
      if (window.location.href.includes('4')) {
        console.log('THIS IS NEXT pharma VALUE: ' + this.props.bar_change.next_doctor);
        console.log('should have gone here');
        this.callButtonDataDoctor(3, 4, 'stop');
      }
      // The rest
      //------------------------------------------

      if (user.checkNumber(window.location.href[window.location.href.length - 1], 5, 1300)) {
        console.log('THIS IS NEXT pharma VALUE: ' + this.props.bar_change.next_doctor);
        this.callButtonDataDoctor(0, 1, 'stop');
      }
      if (user.checkNumber(window.location.href[window.location.href.length - 1], 6, 1300)) {
        console.log('THIS IS NEXT pharma VALUE: ' + this.props.bar_change.next_doctor);
        this.callButtonDataDoctor(1, 2, 'stop');
      }
      if (user.checkNumber(window.location.href[window.location.href.length - 1], 7, 1300)) {
        console.log('THIS IS NEXT pharma VALUE: ' + this.props.bar_change.next_doctor);
        this.callButtonDataDoctor(2, 3, 'stop');
      }
      if (user.checkNumber(window.location.href[window.location.href.length - 1], 8, 1300)) {
        console.log('THIS IS NEXT pharma VALUE: ' + this.props.bar_change.next_doctor);
        console.log('went here');
        this.callButtonDataDoctor(3, 4, 'stop');
      }
      if (user.checkNumber(window.location.href[window.location.href.length - 1], 9, 1300)) {
        console.log('THIS IS NEXT pharma VALUE: ' + this.props.bar_change.next_doctor);
        user.barChange(
          this.props.bar_change.array_doctor[5],
          this.props.bar_change.array_doctor,
          this.props.bar_change.next_doctor,
          'bar_change_doctor',
          'doctor_bar_send',
          'stop'
        );
      } // PHARMA SECTION
    } else if (window.location.href.includes('?pharma')) {
      if (window.location.href.includes('1')) {
        console.log('THIS IS NEXT pharma VALUE: ' + this.props.bar_change.next_pharma);
        // 0
        //0,1   1
        //1,2   2
        //2,3   3
        //3,4   4
        //5     ...
        //4,6
        this.callButtonDataPharma(0, 1, 'stop');
      }
      if (window.location.href.includes('2')) {
        console.log('THIS IS NEXT pharma VALUE: ' + this.props.bar_change.next_pharma);
        this.callButtonDataPharma(1, 2, 'stop');
      }
      if (window.location.href.includes('3')) {
        console.log('THIS IS NEXT pharma VALUE: ' + this.props.bar_change.next_pharma);

        this.callButtonDataPharma(2, 3, 'stop');
      }
      if (window.location.href.includes('4')) {
        console.log('THIS IS NEXT pharma VALUE: ' + this.props.bar_change.next_pharma);
        console.log('should have gone here');
        this.callButtonDataPharma(3, 4, 'stop');
      }
      // The rest
      //------------------------------------------

      if (user.checkNumber(window.location.href[window.location.href.length - 1], 5, 1300)) {
        console.log('THIS IS NEXT pharma VALUE: ' + this.props.bar_change.next_pharma);
        this.callButtonDataPharma(0, 1, 'stop');
      }
      if (user.checkNumber(window.location.href[window.location.href.length - 1], 6, 1300)) {
        console.log('THIS IS NEXT pharma VALUE: ' + this.props.bar_change.next_pharma);
        this.callButtonDataPharma(1, 2, 'stop');
      }
      if (user.checkNumber(window.location.href[window.location.href.length - 1], 7, 1300)) {
        console.log('THIS IS NEXT pharma VALUE: ' + this.props.bar_change.next_pharma);
        this.callButtonDataPharma(2, 3, 'stop');
      }
      if (user.checkNumber(window.location.href[window.location.href.length - 1], 8, 1300)) {
        console.log('THIS IS NEXT pharma VALUE: ' + this.props.bar_change.next_pharma);
        console.log('went here');
        this.callButtonDataPharma(3, 4, 'stop');
      }
      if (user.checkNumber(window.location.href[window.location.href.length - 1], 9, 1300)) {
        console.log('THIS IS NEXT pharma VALUE: ' + this.props.bar_change.next_pharma);
        user.barChange(
          this.props.bar_change.array_pharma[5],
          this.props.bar_change.array_pharma,
          this.props.bar_change.next_pharma,
          'bar_change_pharma',
          'pharma_bar_send',
          'stop'
        );
      }
    }
  }
  callButtonDataPatient(index_1, index_2, stop) {
    this.props.bar_change.next_patient === false
      ? user.barChange(
          this.props.bar_change.array_patient[index_1],
          this.props.bar_change.array_patient,
          this.props.bar_change.next_patient,
          'bar_change_patient',
          'patient_bar_send',
          stop
        )
      : user.barChange(
          this.props.bar_change.array_patient[index_2],
          this.props.bar_change.array_patient,
          this.props.bar_change.next_patient,
          'bar_change_patient',
          'patient_bar_send',
          stop
        );
  }
  callButtonDataDoctor(index_1, index_2, stop) {
    this.props.bar_change.next_doctor === false
      ? user.barChange(
          this.props.bar_change.array_doctor[index_1],
          this.props.bar_change.array_doctor,
          this.props.bar_change.next_doctor,
          'bar_change_doctor',
          'doctor_bar_send',
          stop
        )
      : user.barChange(
          this.props.bar_change.array_doctor[index_2],
          this.props.bar_change.array_doctor,
          this.props.bar_change.next_doctor,
          'bar_change_doctor',
          'doctor_bar_send',
          stop
        );
  }
  callButtonDataPharma(index_1, index_2, stop) {
    this.props.bar_change.next_pharma === false
      ? user.barChange(
          this.props.bar_change.array_pharma[index_1],
          this.props.bar_change.array_pharma,
          this.props.bar_change.next_pharma,
          'bar_change_pharma',
          'pharma_bar_send',
          stop
        )
      : user.barChange(
          this.props.bar_change.array_pharma[index_2],
          this.props.bar_change.array_pharma,
          this.props.bar_change.next_pharma,
          'bar_change_pharma',
          'pharma_bar_send',
          stop
        );
  }

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
