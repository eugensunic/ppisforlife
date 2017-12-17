import React from "react"
import { connect } from "react-redux"

@connect((store) => {
  return {
   bar_change:store.bar_change
  };
})
export default class Headerbarpharma extends React.Component {
  constructor(props) {
     super(props);
   }
  render() {
  return(
    <div className="headerbar">
      <p className="post_elementheaderbar_tag_original" onClick={this.reloadIndexPage}>ORIGINAL</p>
      <img src="../../pics/filter.png" className="filter_icon" />
      <p className="post_elementheaderbar" onClick={""}>{this.props.is_pharma==="pharmacist"?"pharmacist":"doctor"}</p>
      <span className="header_border_tag">explicit</span>
      <span className="header_border_tag">user associated</span>
      <p className="post_elementheaderbar" onClick={""}>opinion on drug</p>
      <span className="header_border_tag">good</span>
      <span className="header_border_tag">good(short-term)</span>
      <span className="header_border_tag">good(long-term)</span>
      <span className="header_border_tag">notgood</span>
      <span className="header_border_tag">good(short-term)</span>
      <span className="header_border_tag">good(long-term)</span>
      <span className="header_border_tag">unknown</span>
      <br/>
      <p className="post_elementheaderbar" onClick={""}>url-source</p>
      <select name="url_drop" className={""} onChange={""} defaultValue="">
        <option value="" style={{display:'none'}} defaultValue="selected" label="choose url"></option>
        <option value="patient">Patient info</option>
        <option value="peoplepharm">PeoplesPharmacy</option>
        <option value="dailymail">DailyMail</option>
        <option value="barretts">BarrettsCampaign</option>
      </select>
      <br/>
      <hr style={{marginTop:0,marginBottom:0}}/>
      <span className="number_below_main_header">{"#"+this.props.bar_change.page_num_pharma}</span>
      <div className="center" style={{marginRight:46}}>
        <span className="inline">Criteria:</span><span className="inline">GERD</span>
      </div>

    </div>
  );
 }
}
