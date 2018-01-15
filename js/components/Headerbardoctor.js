import React from "react"
import { connect } from "react-redux"
import * as user from "../actions/asyncCAll.js"

@connect((store) => {
  return {
   bar_change:store.bar_change
  };
})
export default class Headerbardoctor extends React.Component {
  constructor(props) {
    super(props);
  }

  callDoctorAll(url, ...args) {
    this.props.dispatch(user.asyncAll(url, 'doctor_call_all', args));
  }

  reloadIndexPage(){
    window.location.reload();
  }

  render() {
  return(
    <div className="headerbar">

      <p className="post_elementheaderbar_tag_original" onClick={this.reloadIndexPage}>ORIGINAL</p>
      <img src="../../pics/filter.png" className="filter_icon" />
      <p className="post_elementheaderbar">{this.props.is_pharma==="pharmacist"?"pharmacist":"doctor"}</p>

      <span className="header_border_tag" onClick={()=>{
        this.callDoctorAll('http://projectsgono.com/medsforlife/appcall_doctor/user_or_doctor.php', 1);
      }}>doctor explicit</span>
      <span className="header_border_tag" onClick={()=>{
        this.callDoctorAll('http://projectsgono.com/medsforlife/appcall_doctor/user_or_doctor.php', 0);
      }}>user associated</span>


      {/*---------------------------------------------------------------------------------------------------------*/}
      <p className="post_elementheaderbar">opinion on drug</p>
      <span className="header_border_tag" onClick={()=> {
        this.callDoctorAll('http://projectsgono.com/medsforlife/appcall_doctor/get_opinion.php', 'good');
      }}>good</span>
      <span className="header_border_tag" onClick={()=> {
        this.callDoctorAll('http://projectsgono.com/medsforlife/appcall_doctor/get_opinion.php', 'good(shortterm)');
      }}>good (short-term)</span>
      <span className="header_border_tag" onClick={()=> {
        this.callDoctorAll('http://projectsgono.com/medsforlife/appcall_doctor/get_opinion.php', 'good(longterm)');
      }}>good (long-term)</span>
      <span className="header_border_tag" onClick={()=> {
        this.callDoctorAll('http://projectsgono.com/medsforlife/appcall_doctor/get_opinion.php', 'notgood');
      }}>not good</span>
      <span className="header_border_tag" onClick={()=> {
        this.callDoctorAll('http://projectsgono.com/medsforlife/appcall_doctor/get_opinion.php', 'notgood(longterm)');
      }}>not good (long-term)</span>
      <span className="header_border_tag" onClick={()=> {
        this.callDoctorAll('http://projectsgono.com/medsforlife/appcall_doctor/get_opinion.php', 'unknown');
      }}>unknown</span>

      <br/>

      {/*---------------------------------------------------------------------------------------------------------*/}
      <p className="post_elementheaderbar" onClick={""}>url-source</p>
      <select name="url_drop" className={""} onChange={(e)=>{
        let param=e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text.trim();
        this.callDoctorAll('http://projectsgono.com/medsforlife/appcall_doctor/url_name.php', param);
      }} defaultValue="">
        <option value="" style={{display:'none'}} defaultValue="selected" label="choose url"></option>
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

      <br/>

      <hr style={{marginTop:0,marginBottom:0}}/>
      <span className="number_below_main_header">{"#"+this.props.bar_change.page_num_dr}</span>

      <div className="center" style={{marginRight:46}}>
        <span className="inline">Criteria:</span><span className="inline">GERD</span>
      </div>

    </div>
  );
 }
}
