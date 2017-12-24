import React from "react"
import { connect } from "react-redux"

import Navbar from '../Navbar.js'
import Navfooter from '../Navfooter.js'
import Social from '../Social.js'

@connect((store) => {
  return {
   navbar:store.nav
  };
})

export default class Faq extends React.Component {
  constructor(props) {
     super(props);
     this.state=({});
   }
  render(){
    return(
      <div className="container">
        <Navbar/>
        preview now

        <Social shown={false}/>
        <Navfooter/>
      </div>
    );

 }
}
