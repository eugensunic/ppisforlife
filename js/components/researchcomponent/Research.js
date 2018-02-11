import React from "react"

import Headerfirst from './Headerfirst.js'
import Headermain from './Headermain.js'
import Stats from './Stats.js'
import Problem from './Problem.js'
import Conclusion from './Conclusion.js'
import Explanation from './Explanation.js'
import Quickstats from './Quickstats.js'


import Navbar from '../Navbar.js'
import Navfooter from '../Navfooter.js'
import Social from '../Social.js'

export default class Research extends React.Component {
  constructor(props) {
     super(props);

   }
   componentWillMount(){
    //na 363 px ga moras izlomiti...
   }
  render(){

    return(
      <div className="container">
        <Navbar/>
        <Quickstats/>
        <p className="title_research">Published research</p>
        {/* will maybe come later */}
        {/* <div style={{marginLeft:17}}>
          <p style={{'display':'inline'}}>Order by:</p> <span className="orderby_heading">Date</span> <span className="orderby_heading">Condition</span>
        </div> */}
        <div className="row">
          <div className="col-sm-6">
            <div className="research_wrapper">
              <Headerfirst id="1" date="27.02.2011." url="" />
              <Headermain heading={"Kidney disease"} image={"../../pics/organs/kidney.jpg"}
                info_content="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has survived not only
              five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."/>
              <Stats/>
              <Problem content=""/>
              <Conclusion content=""/>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="research_wrapper">
              <Headerfirst id="2" date="27.02.2011." url="" />
              <Headermain heading={"Heart disease"} image={"../../pics/organs/heart.png"}
                info_content="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has survived not only
              five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."/>
              <Stats/>
              <Problem content=""/>
              <Conclusion content=""/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="research_wrapper">
              <Headerfirst id="3" date="27.02.2011." url="" />
              <Headermain heading={"Kidney disease"} image={"../../pics/organs/kidney.jpg"}
                info_content="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has survived not only
              five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."/>
              <Stats/>
              <Problem content=""/>
              <Conclusion content=""/>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="research_wrapper">
              <Headerfirst id="4" date="27.02.2011." url="" />
              <Headermain heading={"Heart disease"} image={"../../pics/organs/heart.png"}
                info_content="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has survived not only
              five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."/>
              <Stats/>
              <Problem content=""/>
              <Conclusion content=""/>
            </div>
          </div>
        </div>
        <div className="row">
          <button id="button_explanation" type="button" className="btn btn-default" style={{marginTop:20,marginLeft:20}} onClick={""}>Show explanation</button>
        </div>
        <Explanation/>
        <Social shown={true}/>
        <Navfooter/>
      </div>
    );

  }
}
