import React from 'react';

export default class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = { first: false };
  }
  componentWillMount() {}
  numberStats() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-6">param1</div>
          <div className="col-sm-6">param2</div>
        </div>
      </div>
    );
  }
  graphStats() {
    return <div>graphing...</div>;
  }
  render() {
    return (
      <div className="stats_wrapper">
        <div className="row">
          <span className="tag_stats">Stats</span>
          <input className="graph_checkbox_stats0" type="checkbox" checked={this.state.first} onChange={() => this.setState({ first: !this.state.first })} />
        </div>
        {this.state.first ? this.graphStats() : this.numberStats()}
      </div>
    );
  }
}
