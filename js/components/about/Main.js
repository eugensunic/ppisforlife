import React from "react"
import { connect } from "react-redux"

import Navbar from '../Navbar.js'
import Newstats from '../Newstats/Newstats.js'
import Navfooter from '../Navfooter.js'
import Social from '../Social.js'

@connect((store) => {
  return {
   navbar:store.nav
  };
})

export default class Main extends React.Component {
  constructor(props) {
     super(props);
     this.state=({});
   }
  render(){
    return(
      <div className="container">
        <Navbar/>
        <div className="row" style={{marginTop:15, marginBottom:10}}>
         
        <Navfooter/>
      </div>
    );
 }
}
