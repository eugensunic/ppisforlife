import React from 'react';

export default class Otherdrugs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="output_section_starter">
        <h4 className="overwrite_h4">
          Other drugs <span className="little-font">(drugs which have similar/same side effects to PPIs)</span>
        </h4>
        <h5 className="black-color">In this section we are trying to see if other popular drugs are related to the problems which PPIs have a connection with</h5>
        <ul>
          <li>B12 deficiency</li>
          <li>Iron deficiency</li>
          <li>Magnesium deficiency</li>
          <li>Osteopororis</li>
          <li>Kidney problems</li>
          <li>Heart problems</li>
          <li>Cognitive problems</li>
        </ul>
        <table className="other_drugs_table">
          <tbody>
            <tr>
              <td className="diagonal">
                <span className="go_right">Condition</span>
                <br />
                <span className="go_left">Medication</span>
              </td>
              <td>
                <p className="center">
                  <strong>B12 def.</strong>
                </p>
              </td>
              <td>
                <p className="center">
                  <strong>Iron def.</strong>
                </p>
              </td>
              <td>
                <p className="center">
                  <strong>Mg def.</strong>
                </p>
              </td>
              <td>
                <p className="center">
                  <strong>Osteoporosis</strong>
                </p>
              </td>
              <td>
                <p className="center">
                  <strong>Heart problems</strong>
                </p>
              </td>
              <td>
                <p className="center">
                  <strong>Kidney problems</strong>
                </p>
              </td>
              <td>
                <p className="center">
                  <strong>Cognitive problems</strong>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="meds_names">Cholesterol meds (statins)</p>
              </td>
              <td>
                <p>no significant connection</p>
              </td>
              <td>
                <p>no significant connection</p>
              </td>
              <td>
                <p>no significant connection</p>
              </td>
              <td>
                <p>no significant connection</p>
              </td>
              <td>
                <p>connection exists (rare)</p>
              </td>
              <td>
                <p>connection exists</p>
              </td>
              <td>
                <p>connection exists (rare)</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="meds_names">High blood pressure meds (beta blockers, calcium channel blockers, thiazide diuretics)</p>
              </td>
              <td>
                <p>no significant connection</p>
              </td>
              <td>
                <p>no significant connection</p>
              </td>
              <td>
                <p>no significant connection</p>
              </td>
              <td>
                <p>no significant connection</p>
              </td>
              <td>
                <p>no significant connection</p>
              </td>
              <td>
                <p>no significant connection</p>
              </td>
              <td>
                <p>no significant connection</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="meds_names">Aspirin (used for fever reducing and inflamation)</p>
              </td>
              <td>
                <p>no significant connection</p>
              </td>
              <td>
                <p>connection exists </p>
              </td>
              <td>
                <p>no significant connection</p>
              </td>
              <td>
                <p>no significant connection</p>
              </td>
              <td>
                <p>no significant connection</p>
              </td>
              <td>
                <p>connection exists (strong)</p>
              </td>
              <td>
                <p>no significant connection</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="meds_names">Pain meds (NSAIDs)</p>
              </td>
              <td>
                <p>no significant connection</p>
              </td>
              <td>
                <p>connection exists</p>
              </td>
              <td>
                <p>no significant connection</p>
              </td>
              <td>
                <p>no significant connection</p>
              </td>
              <td>
                <p>connection exists</p>
              </td>
              <td>
                <p>connection exists (strong)</p>
              </td>
              <td>
                <p>no significant connection</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="meds_names"> Respiratory (asthma) meds</p>
              </td>
              <td>
                <p>no significant connection</p>
              </td>
              <td>
                <p>no significant connection</p>
              </td>
              <td>
                <p>no significant connection</p>
              </td>
              <td>
                <p>connection exists</p>
              </td>
              <td>
                <p>no significant connection</p>
              </td>
              <td>
                <p>no significant connection</p>
              </td>
              <td>
                <p>no significant connection</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="meds_names">Diabetes meds (insulin)</p>
              </td>
              <td>
                <p>no significant connection</p>
              </td>
              <td>
                <p>no significant connection</p>
              </td>
              <td>
                <p>no significant connection</p>
              </td>
              <td>
                <p>no significant connection</p>
              </td>
              <td>
                <p>no significant connection</p>
              </td>
              <td>
                <p>no significant connection</p>
              </td>
              <td>
                <p>no significant connection</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="meds_names">Mental health (anxiety, depression, social disorders) meds (alprazolam, sertraline...)</p>
              </td>
              <td>
                <p>no significant connection</p>
              </td>
              <td>
                <p>no significant connection</p>
              </td>
              <td>
                <p>no significant connection</p>
              </td>
              <td>
                <p>no significant connection</p>
              </td>
              <td>
                <p>no significant connection</p>
              </td>
              <td>
                <p>no significant connection</p>
              </td>
              <td>
                <p>connection exists</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
