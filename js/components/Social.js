import React from "react"

export default class Social extends React.Component {
  constructor(props) {
     super(props);
     this.state=({show:this.props.shown});
   }
  render(){
    return(
    <div className="row">
      {!this.state.show?(<span className="hide_social" onClick={()=>this.setState({show:true})}>Hide</span>):(<span className="show_social" onClick={()=>this.setState({show:false})}>Social</span>)}
      {!this.state.show?
        <div className="social_wrap">
          <img className="social_width" src="../../pics/socialnet/facebook.png" />
          <img className="social_width" src="../../pics/socialnet/twitter.png" />
          <img className="social_width" src="../../pics/socialnet/youtube.png" />
          <img className="social_width" src="../../pics/socialnet/instagram.png" />
        </div>
        :<span></span>}
    </div>
    );

 }
}
