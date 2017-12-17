import React from "react"

export default class Problem extends React.Component {
  constructor(props) {
     super(props);

   }
   componentWillMount(){

   }
  render(){
    return(
      <div className="problem_wrapper">
        <div className="row">
          <span className="problem" style={{top:-2}}>Problem</span>
        </div>
        {/* {this.props.content} */}
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
      </div>
    );

  }
}
