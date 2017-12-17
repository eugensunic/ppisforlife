import React from "react"
import Select from 'react-select';

export default class Success extends React.Component {
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
    <button className={this.props.class}  onClick={this.props.onClick} disabled={this.props.disabled}>{this.props.val}</button>
  );
}
}
