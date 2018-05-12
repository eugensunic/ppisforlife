import React from 'react';
import { connect } from 'react-redux';
import * as user from '../actions/asyncCAll.js';

@connect(store => {
  return {
    bar_change: store.bar_change
  };
})
export default class Headerbardoctor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { criteria_value: 'default' };
  }

  callDoctorAll(url, ...args) {
    this.props.dispatch(user.asyncAll(url, 'doctor_call_all', args));
  }

  reloadIndexPage() {
    window.location.reload();
  }

  render() {
    return (
      <div className="headerbar">
        <img src="../../pics/filter.png" className="filter_icon" />
        <p className="post_elementheaderbar">{this.props.is_pharma === 'pharmacist' ? 'pharmacist' : 'doctor'}</p>

        <span
          className="header_border_tag"
          onClick={() => {
            this.callDoctorAll('/medsforlife/appcall_doctor/user_or_doctor.php', 1);
            this.setState({ criteria_value: 'Personal doctor opinion' });
          }}>
          doctor explicit
        </span>
        <span
          className="header_border_tag"
          onClick={() => {
            this.callDoctorAll('/medsforlife/appcall_doctor/user_or_doctor.php', 0);
            this.setState({ criteria_value: 'Doctor opinion expressed by patient' });
          }}>
          user associated
        </span>

        {/*---------------------------------------------------------------------------------------------------------*/}
        <p className="post_elementheaderbar">opinion on drug</p>
        <span
          className="header_border_tag"
          onClick={() => {
            this.callDoctorAll('/medsforlife/appcall_doctor/get_opinion.php', 'good');
            this.setState({ criteria_value: 'Positive opinion' });
          }}>
          good
        </span>
        <span
          className="header_border_tag"
          onClick={() => {
            this.callDoctorAll('/medsforlife/appcall_doctor/get_opinion.php', 'good(shortterm)');
            this.setState({ criteria_value: 'Positive opinion(short-term drug usage)' });
          }}>
          good (short-term)
        </span>
        <span
          className="header_border_tag"
          onClick={() => {
            this.callDoctorAll('/medsforlife/appcall_doctor/get_opinion.php', 'good(longterm)');
            this.setState({ criteria_value: 'Positive opinion(long-term drug usage)' });
          }}>
          good (long-term)
        </span>
        <span
          className="header_border_tag"
          onClick={() => {
            this.callDoctorAll('/medsforlife/appcall_doctor/get_opinion.php', 'notgood');
            this.setState({ criteria_value: 'Negative opinion(drug usage)' });
          }}>
          not good
        </span>
        <span
          className="header_border_tag"
          onClick={() => {
            this.callDoctorAll('/medsforlife/appcall_doctor/get_opinion.php', 'notgood(longterm)');
            this.setState({ criteria_value: 'Negative opinion(long-term drug usage)' });
          }}>
          not good (long-term)
        </span>
        <span
          className="header_border_tag"
          onClick={() => {
            this.callDoctorAll('/medsforlife/appcall_doctor/get_opinion.php', 'unknown');
            this.setState({ criteria_value: 'Unknown opinion(short-term drug usage)' });
          }}>
          unknown
        </span>

        <br />

        {/*---------------------------------------------------------------------------------------------------------*/}
        <p className="post_elementheaderbar" onClick={''}>
          url-source
        </p>
        <select
          name="url_drop"
          className={''}
          onChange={e => {
            let param = e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text.trim();
            this.callDoctorAll('/medsforlife/appcall_doctor/url_name.php', param);
            this.setState({ criteria_value: param });
          }}
          defaultValue="">
          <option value="" style={{ display: 'none' }} defaultValue="selected" label="choose url" />
          <option value="patientinf">patient.info</option>
          <option value="medscape">medscape</option>
          <option value="peoplepharma">peoplespharmacy</option>
          <option value="dailymail">dailymail</option>
          <option value="reddit">reddit</option>
          <option value="barrettscampaign">barrettscampaign</option>
          <option value="crhiskresser">chriskresser.com</option>
          <option value="nytimes">nytimes</option>
          <option value="healingwell">healingwell</option>
          <option value="quora">quora</option>
        </select>

        <br />

        <hr style={{ marginTop: 0, marginBottom: 0 }} />
        <span className="number_below_main_header">{'#' + this.props.bar_change.page_num_dr}</span>

        <div className="center" style={{ marginRight: 46, paddingBottom: 1 }}>
          <span className="inline criteria_heading">Criteria:</span>
          <span className="inline criteria_value">{this.state.criteria_value}</span>
        </div>
      </div>
    );
  }
}
