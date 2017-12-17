import React from "react"
import { connect } from "react-redux"
import * as user from "./Function.js"
@connect((store) => {
  return {
   bar_change:store.bar_change
  };
})
export default class Bardoctor extends React.Component {
  constructor(props) {
     super(props);
   }
  render(){
    return(
    <div className="bar">
      {this.props.bar_change.next_doctor?<p className="bar_num move_first_num_bar"
        onClick={()=>user.barChange(1,this.props.bar_change.array_doctor,this.props.bar_change.next_doctor,"bar_change_doctor","doctor_bar_send")}>1</p>:""}
      {this.props.bar_change.next_doctor?<p className="bar_num"
        onClick={()=>user.barChange(this.props.bar_change.array_doctor[0],this.props.bar_change.array_doctor,this.props.bar_change.next_doctor,"bar_change_doctor","doctor_bar_send")}>...</p>:""}

      <p className={this.props.bar_change.next_doctor===false?(this.props.bar_change.array_doctor[0]===this.props.bar_change.selected_doctor)?"selected_bar":"bar_num":(this.props.bar_change.array_doctor[1]===this.props.bar_change.selected_doctor)?"selected_bar":"bar_num"}
        onClick={()=>this.props.bar_change.next_doctor===false?user.barChange(this.props.bar_change.array_doctor[0],this.props.bar_change.array_doctor,this.props.bar_change.next_doctor,"bar_change_doctor","doctor_bar_send"):user.barChange(this.props.bar_change.array_doctor[1],this.props.bar_change.array_doctor,this.props.bar_change.next_doctor,"bar_change_doctor","doctor_bar_send")}>
        {this.props.bar_change.next_doctor?this.props.bar_change.array_doctor[1]:this.props.bar_change.array_doctor[0]}</p>
      
      <p className={this.props.bar_change.next_doctor===false?(this.props.bar_change.array_doctor[1]===this.props.bar_change.selected_doctor)?"selected_bar":"bar_num":(this.props.bar_change.array_doctor[2]===this.props.bar_change.selected_doctor)?"selected_bar":"bar_num"}
        onClick={()=>this.props.bar_change.next_doctor===false?user.barChange(this.props.bar_change.array_doctor[1],this.props.bar_change.array_doctor,this.props.bar_change.next_doctor,"bar_change_doctor","doctor_bar_send"):user.barChange(this.props.bar_change.array_doctor[2],this.props.bar_change.array_doctor,this.props.bar_change.next_doctor,"bar_change_doctor","doctor_bar_send")}>
        {this.props.bar_change.next_doctor?this.props.bar_change.array_doctor[2]:this.props.bar_change.array_doctor[1]}</p>

      <p className={this.props.bar_change.next_doctor===false?(this.props.bar_change.array_doctor[2]===this.props.bar_change.selected_doctor)?"selected_bar":"bar_num":(this.props.bar_change.array_doctor[3]===this.props.bar_change.selected_doctor)?"selected_bar":"bar_num"}
        onClick={()=>this.props.bar_change.next_doctor===false?user.barChange(this.props.bar_change.array_doctor[2],this.props.bar_change.array_doctor,this.props.bar_change.next_doctor,"bar_change_doctor","doctor_bar_send"):user.barChange(this.props.bar_change.array_doctor[3],this.props.bar_change.array_doctor,this.props.bar_change.next_doctor,"bar_change_doctor","doctor_bar_send")}>
        {this.props.bar_change.next_doctor?this.props.bar_change.array_doctor[3]:this.props.bar_change.array_doctor[2]}</p>

      <p className={this.props.bar_change.next_doctor===false?(this.props.bar_change.array_doctor[3]===this.props.bar_change.selected_doctor)?"selected_bar":"bar_num":(this.props.bar_change.array_doctor[4]===this.props.bar_change.selected_doctor)?"selected_bar":"bar_num"}
        onClick={()=>this.props.bar_change.next_doctor===false?user.barChange(this.props.bar_change.array_doctor[3],this.props.bar_change.array_doctor,this.props.bar_change.next_doctor,"bar_change_doctor","doctor_bar_send"):user.barChange(this.props.bar_change.array_doctor[4],this.props.bar_change.array_doctor,this.props.bar_change.next_doctor,"bar_change_doctor","doctor_bar_send")}>
        {this.props.bar_change.next_doctor?this.props.bar_change.array_doctor[4]:this.props.bar_change.array_doctor[3]}</p>

      {this.props.bar_change.next_doctor?
        <p className={this.props.bar_change.next_doctor===false?(this.props.bar_change.array_doctor[4]===this.props.bar_change.selected_doctor)?"selected_bar":"bar_num":(this.props.bar_change.array_doctor[5]===this.props.bar_change.selected_doctor)?"selected_bar":"bar_num"}
          onClick={()=>user.barChange(this.props.bar_change.array_doctor[5],this.props.bar_change.array_doctor,this.props.bar_change.next_doctor,"bar_change_doctor","doctor_bar_send")}>{this.props.bar_change.array_doctor[5]}</p>:""}


      <p className={this.props.bar_change.next_doctor===false?(this.props.bar_change.array_doctor[5]===this.props.bar_change.selected_doctor)?"selected_bar":"bar_num":(this.props.bar_change.array_doctor[6]===this.props.bar_change.selected_doctor)?"selected_bar":"bar_num"}
        onClick={()=>this.props.bar_change.next_doctor===false?user.barChange(this.props.bar_change.array_doctor[4],this.props.bar_change.array_doctor,this.props.bar_change.next_doctor,"bar_change_doctor","doctor_bar_send"):
          user.barChange(this.props.bar_change.array_doctor[6],this.props.bar_change.array_doctor,this.props.bar_change.next_doctor,"bar_change_doctor","doctor_bar_send")}>...</p>
      </div>
      )
          }
          }
