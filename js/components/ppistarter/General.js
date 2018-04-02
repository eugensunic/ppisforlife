import React from 'react';

export default class General extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="general_section_starter">
        <h4 className="overwrite_h4">
          PPI starters instruction <span className="little-font">(people who are on the drug for the first time)</span>
        </h4>
        <p> General instructions:</p>
        <ul>
          <li>Take your medication 30-45 minutes before breakfast</li>
          <li>If you are taking your medication in the evening, take it 30-45 minutes before your evening meal</li>
          <li>Take your medication every day at the same time</li>
          <li>Don&#39;t skip days on medication until you consume all the given pills</li>
          <li>Don't take higher dosages or more pills a day if you haven't consulted your doctor previously</li>
          <li>Avoid drinking alcohol, sodas, avoid smoking and anything else which could extend the healing process</li>
          <li>Consume less acidic foods</li>
          <li>Eliminate trigger foods</li>
          <li>Do moderate exercise and drink water</li>
        </ul>
      </div>
    );
  }
}
