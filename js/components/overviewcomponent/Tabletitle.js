import React from 'react';

export default class TableTitle extends React.Component {
  render() {
    return (
      <div className={'overview-title ' + this.props.overwrite} style={{ backgroundColor: this.props.backColor }}>
        {this.props.title}
      </div>
    );
  }
}
