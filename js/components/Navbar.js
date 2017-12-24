import React from "react"
import { connect } from "react-redux"
import { withRouter, Route, Router } from 'react-router-dom'

@connect((store) => {
  return {
   navbar:store.navbar
  };
})

export default class Navbar extends React.Component {
   constructor(props) {
     super(props);
   }

   componentWillMount() {
   }

    render(){
      return(
        <div>
          <div className="nav_center">
            <Route render={({ history }) => (
              <span className="nav_element" onClick={()=>history.push('/')}>home</span>
            )} />
            <Route render={({ history }) => (
              <span className="nav_element" onClick={()=>history.push('/statistics')}>statistics</span>
            )} />
            <Route render={({ history}) => (
              <span className="nav_element" onClick={()=>history.push('/research')}>research</span>
            )} />
            <Route render={({ history}) => (
              <span className="nav_element" onClick={()=>history.push('/form')}>input</span>
            )} />
            <Route render={({ history}) => (
              <span className="nav_element" onClick={()=>history.push('/tips')}>tips</span>
            )} />
            <Route render={({ history}) => (
              <span className="nav_element" onClick={()=>history.push('/faq')}>faq</span>
            )} />
            <Route render={({ history}) => (
              <span className="nav_element" onClick={()=>history.push('/about')}>about</span>
            )} />
          </div>
        </div>
      );
    }
  }
