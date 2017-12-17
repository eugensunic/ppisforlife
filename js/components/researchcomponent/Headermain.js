import React from "react"

export default class Headermain extends React.Component {
  constructor(props) {
     super(props);

   }
   componentWillMount(){

   }
  render(){

    return(
      <div>
        <p className="study_name">Study name:</p> <span className="study_name_val">{this.props.heading}</span>
        <div className="research_info_box">
          <img className="research_main_image" src={this.props.image} style={{width:60, float:'left', marginRight:5}}/>
          {this.props.info_content}
        </div>
      </div>
    );

  }
}
