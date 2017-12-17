import React from "react"

export default class Conclusion extends React.Component {
  constructor(props) {
     super(props);

   }
   componentWillMount(){

   }
  render(){

      return(
        <div className="conclusion_wrapper">
          <div className="row">
            <span className="conclusion_res" style={{top:-2}}>Conclusion</span>
          </div>
          {/* {this.props.content} */}
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
        </div>
      );

  }
}
