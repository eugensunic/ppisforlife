import React from 'react'
import { connect } from 'react-redux'

import Postheaderfirst  from './Postheaderfirst'
import Postheadersecond  from './Postheadersecond'
import Postmain from './Postmain'
import Postfooter from './Postfooter'
import Patientpost from './Patientpost.js'
import Doctorpost from './Doctorpost.js'
import Pharmapost from './Pharmapost.js'
import Navbar from './Navbar.js'
import Navfooter from './Navfooter.js'
import Newstats from './Newstats/Newstats.js'
import Social from './Social.js'

@connect((store) => {
  return {
   navbar:store.nav
  }
})

export default class Layout extends React.Component {
  constructor(props) {
     super(props);
     this.state=({radio1:true,radio2:false,radio3:false,first_check:false});
   }
   getPostColor(){
     if (this.state.radio1){
       return "post_main";
     }
     else if (this.state.radio2){
       return "post_main_doctor";
     }
     else if (this.state.radio3){
       return "post_main_pharma";
     }
   }

   chooseOneRadio(){
     if (this.state.radio1){
       return <Patientpost bg_color_post={this.getPostColor()}></Patientpost>
     }
     else if(this.state.radio2){
       return <Doctorpost bg_color_post={this.getPostColor()}></Doctorpost>
     }
     else if(this.state.radio3){
       return <Pharmapost bg_color_post={this.getPostColor()}></Pharmapost>

     }
   }

  render() {
    return (
      <div className="container">
        <Navbar/>
        <span className={this.state.radio1?"radio_clicked":"radio_normal"} style={{marginRight:3}} onClick={()=>this.setState({radio1:true,radio2:false,radio3:false})}>Patient</span>
        <span className={this.state.radio2?"radio_clicked":"radio_normal"} style={{marginRight:3}} onClick={()=>this.setState({radio1:false,radio2:true,radio3:false})}>Doctor</span>
        <span className={this.state.radio3?"radio_clicked":"radio_normal"} onClick={()=>this.setState({radio1:false,radio2:false,radio3:true})}>Pharmacist</span>
        {this.chooseOneRadio()}
        <Social shown={true}/>
        <Navfooter/>
      </div>)
 }
}
