import React from "react"
import Select from 'react-select';

export default class Button extends React.Component {
  constructor(props) {
     super(props);
     this.state = {value:"find",radio_gender:[false,false],radio_race:[false,false,false]}
   }
  render(){
  var options = [
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two' }
  ];
    return(
    <button className={this.props.className} onClick={this.props.onClick}>{this.props.val}</button>
  );
}
}
