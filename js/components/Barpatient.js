import React from "react"
import { connect } from "react-redux"
import * as user from "./Function.js"
@connect((store) => {
  return {
   bar_change:store.bar_change
  };
})
export default class Barpatient extends React.Component {
  constructor(props) {
     super(props);
   }
  render(){
    return(
    <div className="bar">
      {this.props.bar_change.next_patient?<p className="bar_num move_first_num_bar"
        onClick={()=>user.barChange(1,this.props.bar_change.array_patient,this.props.bar_change.next_patient,"bar_change_patient","patient_bar_send")}>1</p>:""}
      {this.props.bar_change.next_patient?<p className="bar_num"
        onClick={()=>user.barChange(this.props.bar_change.array_patient[0],this.props.bar_change.array_patient,this.props.bar_change.next_patient,"bar_change_patient","patient_bar_send")}>...</p>:""}

      <p className={this.props.bar_change.next_patient===false?(this.props.bar_change.array_patient[0]===this.props.bar_change.selected_patient)?"selected_bar":"bar_num":(this.props.bar_change.array_patient[1]===this.props.bar_change.selected_patient)?"selected_bar":"bar_num"}
        onClick={()=>this.props.bar_change.next_patient===false?user.barChange(this.props.bar_change.array_patient[0],this.props.bar_change.array_patient,this.props.bar_change.next_patient,"bar_change_patient","patient_bar_send"):user.barChange(this.props.bar_change.array_patient[1],this.props.bar_change.array_patient,this.props.bar_change.next_patient,"bar_change_patient","patient_bar_send")}>
        {this.props.bar_change.next_patient?this.props.bar_change.array_patient[1]:this.props.bar_change.array_patient[0]}</p>

      <p className={this.props.bar_change.next_patient===false?(this.props.bar_change.array_patient[1]===this.props.bar_change.selected_patient)?"selected_bar":"bar_num":(this.props.bar_change.array_patient[2]===this.props.bar_change.selected_patient)?"selected_bar":"bar_num"}
        onClick={()=>this.props.bar_change.next_patient===false?user.barChange(this.props.bar_change.array_patient[1],this.props.bar_change.array_patient,this.props.bar_change.next_patient,"bar_change_patient","patient_bar_send"):user.barChange(this.props.bar_change.array_patient[2],this.props.bar_change.array_patient,this.props.bar_change.next_patient,"bar_change_patient","patient_bar_send")}>
        {this.props.bar_change.next_patient?this.props.bar_change.array_patient[2]:this.props.bar_change.array_patient[1]}</p>

      <p className={this.props.bar_change.next_patient===false?(this.props.bar_change.array_patient[2]===this.props.bar_change.selected_patient)?"selected_bar":"bar_num":(this.props.bar_change.array_patient[3]===this.props.bar_change.selected_patient)?"selected_bar":"bar_num"}
        onClick={()=>this.props.bar_change.next_patient===false?user.barChange(this.props.bar_change.array_patient[2],this.props.bar_change.array_patient,this.props.bar_change.next_patient,"bar_change_patient","patient_bar_send"):user.barChange(this.props.bar_change.array_patient[3],this.props.bar_change.array_patient,this.props.bar_change.next_patient,"bar_change_patient","patient_bar_send")}>
        {this.props.bar_change.next_patient?this.props.bar_change.array_patient[3]:this.props.bar_change.array_patient[2]}</p>

      <p className={this.props.bar_change.next_patient===false?(this.props.bar_change.array_patient[3]===this.props.bar_change.selected_patient)?"selected_bar":"bar_num":(this.props.bar_change.array_patient[4]===this.props.bar_change.selected_patient)?"selected_bar":"bar_num"}
        onClick={()=>this.props.bar_change.next_patient===false?user.barChange(this.props.bar_change.array_patient[3],this.props.bar_change.array_patient,this.props.bar_change.next_patient,"bar_change_patient","patient_bar_send"):user.barChange(this.props.bar_change.array_patient[4],this.props.bar_change.array_patient,this.props.bar_change.next_patient,"bar_change_patient","patient_bar_send")}>
        {this.props.bar_change.next_patient?this.props.bar_change.array_patient[4]:this.props.bar_change.array_patient[3]}</p>

      {this.props.bar_change.next_patient?
        <p className={this.props.bar_change.next_patient===false?(this.props.bar_change.array_patient[4]===this.props.bar_change.selected_patient)?"selected_bar":"bar_num":(this.props.bar_change.array_patient[5]===this.props.bar_change.selected_patient)?"selected_bar":"bar_num"}
          onClick={()=>user.barChange(this.props.bar_change.array_patient[5],this.props.bar_change.array_patient,this.props.bar_change.next_patient,"bar_change_patient","patient_bar_send")}>{this.props.bar_change.array_patient[5]}</p>:""}

      <p className={this.props.bar_change.next_patient===false?(this.props.bar_change.array_patient[5]===this.props.bar_change.selected_patient)?"selected_bar":"bar_num":(this.props.bar_change.array_patient[6]===this.props.bar_change.selected_patient)?"selected_bar":"bar_num"}
        onClick={()=>this.props.bar_change.next_patient===false?user.barChange(this.props.bar_change.array_patient[4],this.props.bar_change.array_patient,this.props.bar_change.next_patient,"bar_change_patient","patient_bar_send"):user.barChange(this.props.bar_change.array_patient[6],this.props.bar_change.array_patient,this.props.bar_change.next_patient,"bar_change_patient","patient_bar_send")}>...
      </p>
      </div>
   )
  }
}
