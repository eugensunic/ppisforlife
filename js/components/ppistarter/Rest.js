import React from 'react';

export default class Rest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="rest_section_starter">
        <h4 className="overwrite_h4">
          Additional comments <span className="little-font" />
        </h4>
        <ul>
          <li>If your PPI brand causes you side effects then try another one until you find the "perfect" one for you (minimal or no side effects)</li>
          <li>
            Use the minimal effective dosage. For example, if you are using omeprazole 20 mg and if that dosages keeps your symptoms at bay, then stay on it, no need for
            increasing your dosage unless your situation worsens.
          </li>
          <li>
            How to calculate Barrett&#39;s esophagus probabilty of getting cancer in <strong>x</strong> years?
          </li>
        </ul>
      </div>
    );
  }
}
