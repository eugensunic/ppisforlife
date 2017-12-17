import React from "react"

export default class Quickstats extends React.Component {
  constructor(props) {
     super(props);

   }
  componentWillMount(){

   }
  render(){
    return(
      <div>
        <div className="row" style={{marginTop:40, marginBottom:40}}>
          <div className="col-sm-4 center">
            <span>How many people develop Barrett’s?</span>
            <p></p>
            <span className="percent_research">2%</span>
          </div>
          <div className="col-sm-4 center">
            <span>How many people suffer from GERD?</span>
            <p></p>
            <span className="percent_research">2%</span>
          </div>
          <div className="col-sm-4 center">
            <span>How many people get stomach cancer each year?</span>
            <p></p>
            <span className="percent_research">2%</span>
          </div>
        </div>
        <div className="row" style={{marginBottom:40}}>
          <div className="col-sm-4 center">
            <span>How many people get esophagus cancer each year?</span>
            <p></p>
            <span className="percent_research">2%</span>
          </div>
          <div className="col-sm-4 center">
            <span>How many PPI prescription are there every year?</span>
            <p></p>
            <span className="percent_research">2%</span>
          </div>
          <div className="col-sm-4 center">
            <span>How many patients with GERD will develop Barrett’s</span>
            <p></p>
            <span className="percent_research">2%</span>
          </div>
        </div>
        <div className="row" style={{marginBottom:40}}>
          <div className="col-sm-4 center">
            <span>How many people get Gastritis due to H. Pylori?</span>
            <p></p>
            <span className="percent_research">2%</span>
          </div>
          <div className="col-sm-4 center">
            <span>How many patients develop CKD due to PPIs?</span>
            <p></p>
            <span className="percent_research">2%</span>
          </div>
          <div className="col-sm-4 center">
            <span>How many patients develop dementia due to PPIs?</span>
            <p></p>
            <span className="percent_research">2%</span>
          </div>
        </div>
      </div>
    );
  }
}
