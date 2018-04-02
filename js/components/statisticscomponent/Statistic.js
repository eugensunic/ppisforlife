import React from 'react';
import { connect } from 'react-redux';

import Listbox from './Listbox.js';
import Graph from './Graphsection.js';
import Otherstats from './Otherstats.js';
import Doctor from './Doctor.js';
import Pharmacist from './Pharmacist.js';
import Patient from './Patient.js';
import Navbar from '../Navbar.js';
import Navfooter from '../Navfooter.js';
import Social from '../Social.js';
import * as user from '../../actions/asyncCAll.js';
import { withRouter, Route, Router, Link } from 'react-router-dom';

@connect(store => {
  return {
    color_navigation: store.color_navigation
  };
})
export default class Statistic extends React.Component {
  constructor(props) {
    super(props);
  }
  patientOrDoctorOrPharma() {
    //patient
    if (this.props.color_navigation.post_navigation[0]) {
      return (
        <div>
          <span className="dr_heading">What is this?</span>
          <p>
            Forum/discussion posts parameters were extracted (by myself) and therefore this statistics was created. The parameters (age, condition, side effects, duration
            of treatment, daily usage, drug generic, drug brand, nutrient def. etc.) extraction was accurate.
          </p>

          <span className="inline">Unknown: Data wasnt found in the forum post</span>
          <br />
          <span className="inline">
            explicit-none: <span className="">user reported explicitly having NO side effects</span>
          </span>
          <br />
          <span className="inline">Used drugs: refferes to PPI drug only which were taken before or after the PPI talked in the post</span>
          <br />
          <span className="inline">Condition initial: forum poster condition because of which he is taking PPIs + other condition (disease) which he has</span>
          <br />
          <span className="inline">Condition PPI: forum poster believes that this drug caused this condition/disease</span>
          <br />
          <span className="inline">
            In post collection the following was assumed: <span className="heartburn_gerd_reflux">longterm-heartburn=GERD=acid-reflux</span>
          </span>
          <br />
          <p className="inline">
            Total <a href="">forum posts</a>: >1200
          </p>
          <br />
        </div>
      );
    }
    //doctor
    if (this.props.color_navigation.post_navigation[1]) {
      return (
        <div>
          <span className="dr_heading">What is this?</span>
          <p>
            Forum/discussion posts were extracted (by myself) when a patient talked about what his doctor told him about PPIs. In other words, if a patient complained or
            just wrote his comment on the Internet about his doctor opinion on this drugs, the doctor’s comment was pulled out and saved into a database.
          </p>

          <p>
            There are a lot of comments from patients on the Internet who express their doctors (MD, specialist) thoughts and therefore share them with other discussion
            participants. This information was used in order to represent the statistics of Dr. opinions.
          </p>

          <span className="inline">Unknown: The extracted doctor comment is either neutral about the PPI drug or does not clearly state his opinion on the drug</span>
          <br />
        </div>
      );
    } else {
      //pharma
      return (
        <div>
          <span className="dr_heading">What is this?</span>
          <p>
            Forum/discussion posts were extracted (by myself) when a patient talked about what his pharmacist told him about PPIs. In other words, if a patient complained
            or just wrote his comment on the Internet about his pharmacist opinion on this drugs, pharmacist comment was pulled out and saved into a database.
          </p>

          <p>
            There are a lot of comments from patients on the Internet who express their pharmacist thoughts and therefore share them with other discussion participants.
            This information was used in order to represent the statistics of Ph. opinions.
          </p>

          <span className="inline">Unknown: The extracted pharmacist comment is either neutral about the PPI drug or does not clearly state his opinion on the drug</span>
          <br />
        </div>
      );
    }
  }
  render() {
    return (
      <div className="container">
        <Navbar />
        <h3 className="inline">
          Internet comments statistics<span className="little-font">
            {' '}
            (patient.info, peoplespharmacy, dailymail, telegraph, reddit, cbs, thesun, chronsforum, chriskresser.com, barrettscampaign.org, healingwell.com, nytimes etc.)
          </span>
        </h3>
        <div style={{ marginTop: 3 }}>
          <Link to={this.props.match.url}>
            <span
              className={this.props.color_navigation.post_navigation[0] ? 'radio_clicked' : 'radio_normal'}
              onClick={() => {
                this.props.dispatch(user.changeNavigationColor('stat-nav', [true, false, false]));
              }}>
              Patient
            </span>
          </Link>

          <Link to={this.props.match.url + '/doctor'}>
            <span
              className={this.props.color_navigation.post_navigation[1] ? 'radio_clicked' : 'radio_normal'}
              onClick={() => {
                this.props.dispatch(user.changeNavigationColor('stat-nav', [false, true, false]));
              }}>
              Doctor
            </span>
          </Link>

          <Link to={this.props.match.url + `/pharma`}>
            <span
              className={this.props.color_navigation.post_navigation[2] ? 'radio_clicked' : 'radio_normal'}
              onClick={() => {
                this.props.dispatch(user.changeNavigationColor('stat-nav', [false, false, true]));
              }}>
              Pharma
            </span>
          </Link>
        </div>
        <div className="info-box-stats">{this.patientOrDoctorOrPharma()}</div>

        <Route exact path={this.props.match.url} component={Patient} />
        <Route path={this.props.match.url + '/doctor'} component={Doctor} />
        <Route path={this.props.match.url + '/pharma'} component={Pharmacist} />

        <Social shown={true} />
        <Navfooter />
      </div>
    );
  }
}
