import React from "react"
import { connect } from "react-redux"
import * as user from "../actions/asyncCAll.js"

@connect((store) => {
  return {
  bar_change:store.bar_change
  };
})
export default class Headerbarpatient extends React.Component {
  callFilter(url1,url2,url3){
      this.props.dispatch(user.asyncAll(url1,"post_post",""));
      this.props.dispatch(user.asyncAll(url2,"data_data",""));
      this.props.dispatch(user.asyncAll(url3,"rest_rest",""));
  }
  reloadIndexPage(){
    //this should be changed
    window.location.reload();
  }
  render(){

    return(
    <div className="headerbar">
      <p className="post_elementheaderbar_tag_original" onClick={this.reloadIndexPage}>ORIGINAL</p>
      <img src="../../pics/filter.png" className="filter_icon" />
      <p className="post_elementheaderbar" onClick={this.callFilter.bind(this,"http://projectsgono.com/medsforlife/appcall/drug_generic_post.php","http://projectsgono.com/medsforlife/appcall/drug_generic_data.php", "http://projectsgono.com/medsforlife/appcall/drug_generic_rest.php")}>generic</p>
      <select name="generic_drop" className={""} onChange={""} defaultValue="">
        <option value="" style={{display:'none'}} defaultValue="selected" label="choose drug"></option>
        <option value="ome">omeprazole</option>
        <option value="esome">esomeprazole</option>
        <option value="pant">pantoprazole</option>
        <option value="lans">lansoprazole</option>
        <option value="rabe">rabeprazole</option>
      </select>
      <p className="post_elementheaderbar" onClick={this.callFilter.bind(this,"http://projectsgono.com/medsforlife/appcall/drug_brand_post.php","http://projectsgono.com/medsforlife/appcall/drug_brand_data.php", "http://projectsgono.com/medsforlife/appcall/drug_brand_rest.php")}>brand</p>
      <select name="brand_drop" className={""} onChange={""} defaultValue="">
        <option value="" style={{display:'none'}} defaultValue="selected" label="choose drug"></option>
        <option value="nex">Nexium</option>
        <option value="esome">Prilosec</option>
        <option value="pant">Protonix</option>
        <option value="pant">Prevacid</option>
        <option value="lans">Zegerid</option>
        <option value="rabe">Losec</option>
      </select>
      <p className="post_elementheaderbar" onClick={this.callFilter.bind(this,"http://projectsgono.com/medsforlife/appcall/drug_dosage_post.php","http://projectsgono.com/medsforlife/appcall/drug_dosage_data.php", "http://projectsgono.com/medsforlife/appcall/drug_dosage_rest.php")}>dosage</p>
      <span className="header_border_tag">low</span>
      <span className="header_border_tag">maitenance</span>
      <span className="header_border_tag">high</span>

      <p className="post_elementheaderbar" onClick={this.callFilter.bind(this,"http://projectsgono.com/medsforlife/appcall/drug_daily_post.php","http://projectsgono.com/medsforlife/appcall/drug_daily_data.php", "http://projectsgono.com/medsforlife/appcall/drug_daily_rest.php")}>daily</p>
      <span className="header_border_tag">yes</span>
      <span className="header_border_tag">no</span>
      <p className="post_elementheaderbar" onClick={this.callFilter.bind(this,"http://projectsgono.com/medsforlife/appcall/drug_duration_post.php","http://projectsgono.com/medsforlife/appcall/drug_duration_data.php", "http://projectsgono.com/medsforlife/appcall/drug_duration_rest.php")}>duration</p>
      <span className="header_border_tag">5</span>
      <span className="header_border_tag">10</span>
      <span className="header_border_tag">15</span>
      <span className="header_border_tag">20+</span>
      <br/>
      <p></p>
      <p className="post_elementheaderbar" onClick={this.callFilter.bind(this,"http://projectsgono.com/medsforlife/appcall/drug_condition_post.php","http://projectsgono.com/medsforlife/appcall/drug_condition_data.php", "http://projectsgono.com/medsforlife/appcall/drug_condition_rest.php")}>condition</p>
      <select name="condition_drop" className={""} onChange={""} defaultValue="">
        <option value="" style={{display:'none'}} defaultValue="selected" label="choose condition"></option>
        <option value="gerd">GERD</option>
        <option value="be">Barrett's</option>
        <option value="ulcer">Ulcer</option>
        <option value="gastritis">Gastritis</option>
        <option value="esophagitis">Esophagitis</option>
      </select>
      <p className="post_elementheaderbar" onClick={this.callFilter.bind(this,"http://projectsgono.com/medsforlife/appcall/drug_ppicondition_post.php","http://projectsgono.com/medsforlife/appcall/drug_ppicondition_data.php", "http://projectsgono.com/medsforlife/appcall/drug_ppicondition_rest.php")}>ppicondition</p>
      <select name="ppicondition_drop" className={""} onChange={""} defaultValue="">
        <option value="" style={{display:'none'}} defaultValue="selected" label="choose ppicondition"></option>
        <option value="kidney">Kidney problem</option>
        <option value="anxiety">Anxiety</option>
        <option value="dementia">Cognitive problems</option>
        <option value="heart">Heart problem</option>
        <option value="infection">Infection</option>
      </select>
      <p className="post_elementheaderbar" onClick={this.callFilter.bind(this,"http://projectsgono.com/medsforlife/appcall/drug_nutrient_post.php","http://projectsgono.com/medsforlife/appcall/drug_nutrient_data.php", "http://projectsgono.com/medsforlife/appcall/drug_nutrient_rest.php")}>nutrient def</p>
      <span className="header_border_tag">Ca</span>
      <span className="header_border_tag">Mg</span>
      <span className="header_border_tag">Fe</span>
      <span className="header_border_tag">B12</span>
      <br/>
      <p></p>
      <p className="post_elementheaderbar" onClick={this.callFilter.bind(this,"http://projectsgono.com/medsforlife/appcall/drug_gender_post.php","http://projectsgono.com/medsforlife/appcall/drug_gender_data.php", "http://projectsgono.com/medsforlife/appcall/drug_gender_rest.php")}>gender</p>
      <span className="header_border_tag">M</span>
      <span className="header_border_tag">F</span>
      <p className="post_elementheaderbar" onClick={this.callFilter.bind(this,"http://projectsgono.com/medsforlife/appcall/drug_age_post.php","http://projectsgono.com/medsforlife/appcall/drug_age_data.php", "http://projectsgono.com/medsforlife/appcall/drug_age_rest.php")}>age</p>
      <span className="header_border_tag">young</span>
      <span className="header_border_tag">adult</span>
      <span className="header_border_tag">elderly</span>
      <br/>
      <p></p>
      <p className="post_elementheaderbar" onClick={this.callFilter.bind(this,"http://projectsgono.com/medsforlife/appcall/drug_sourceurl_post.php","http://projectsgono.com/medsforlife/appcall/drug_sourceurl_data.php", "http://projectsgono.com/medsforlife/appcall/drug_sourceurl_rest.php")}>url-source</p>
      <select name="url_drop" className={""} onChange={""} defaultValue="">
        <option value="" style={{display:'none'}} defaultValue="selected" label="choose url"></option>
        <option value="kidney">Patient info</option>
        <option value="anxiety">PeoplesPharmacy</option>
        <option value="dementia">DailyMail</option>
        <option value="heart">BarrettsCampaign</option>
      </select>
      <p className="post_elementheaderbar" onClick={this.callFilter.bind(this,"http://projectsgono.com/medsforlife/appcall/drug_date_post.php","http://projectsgono.com/medsforlife/appcall/drug_date_data.php", "http://projectsgono.com/medsforlife/appcall/drug_date_rest.php")}>year-posted</p>
      <span className="header_border_tag">&#8592;2000</span>
      <span className="header_border_tag">2000-2010</span>
      <span className="header_border_tag">2010&#8594;</span>
      <p className="post_elementheaderbar" onClick={this.callFilter.bind(this,"http://projectsgono.com/medsforlife/appcall/drug_opinion_post.php","http://projectsgono.com/medsforlife/appcall/drug_opinion_data.php", "http://projectsgono.com/medsforlife/appcall/drug_opinion_rest.php")}>opinion-post</p>
      <span className="header_border_tag">positive</span>
      <span className="header_border_tag">negative</span>
      <span className="header_border_tag">interesting</span>
      <span className="header_border_tag">extreme</span>
      <br/>
      <hr style={{marginTop:0,marginBottom:0}}/>
      <span className="number_below_main_header">{"#"+this.props.bar_change.page_num_patient}</span>
      <div className="center" style={{marginRight:46}}>
        <span className="inline">Criteria:</span><span className="inline">GERD</span>
      </div>
      


    </div>
   )
  }
}
