import React from "react"
import { connect } from "react-redux"

@connect((store) => {
  return {
   navbar:store.navbar
  };
})
export default class Navbar extends React.Component {
  constructor(props) {
     super(props);
   }
   componentWillMount(){
   }
  render(){
    return(
      <div>
        <div className="nav_center">
          <span className="nav_element" onClick={()=>{this.props.dispatch({type:"home_element", payload:"home"})}}>home</span>
          <span className="nav_element" onClick={()=>{this.props.dispatch({type:"stats_element", payload:"stats"})}}>statistics</span>
          <span className="nav_element" onClick={()=>{this.props.dispatch({type:"research_element", payload:"research"})}}>research</span>
          <span className="nav_element" onClick={()=>{this.props.dispatch({type:"input_element", payload:"input"})}}>input</span>
          <span className="nav_element" onClick={()=>{this.props.dispatch({type:"starter_element", payload:"starter"})}}>tips</span>
          <span className="nav_element" onClick={()=>{this.props.dispatch({type:"about_element", payload:"about"})}}>about</span>
          <span className="nav_element" onClick={()=>location.href = "http://localhost:8080/question.html"}>faq</span>
        </div>
      </div>
    );
  }
}
