import React from 'react';

export default class Navfooter extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {}
  render() {
    return <div className="footer">© {new Date().getFullYear()} Info page</div>;
  }
}
