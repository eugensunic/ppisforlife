import React from 'react';

export default class Navfooter extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {}
  render() {
    return (
      <div className="footer" style={{ position: this.props.position }}>
        © 2017 Info page
      </div>
    );
  }
}
