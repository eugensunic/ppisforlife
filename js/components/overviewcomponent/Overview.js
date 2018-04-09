import React from 'react';
import { connect } from 'react-redux';
import * as user from '../../actions/asyncCAll.js';
import * as func from './Function.js';
import axios from 'axios';

import TableTitle from './Tabletitle.js';
import Navfooter from '../Navfooter.js';
import Navbar from '../Navbar.js';
import Explanation from './Explanation.js';

import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumnr } from 'material-ui/Table';
import { Tabs, Tab } from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  headline: {
    fontSize: 26,
    paddingTop: 16,
    fontWeight: 400,
    textAlign: 'center',
    color: '#5a51510'
  }
};

@connect(store => {
  return {
    overviewstat: store.overviewstats,
    overview_extra_stat: store.overviewstats_extra
  };
})
export default class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'a'
    };
  }

  handleChange(value) {
    this.setState({
      value: value
    });
  }

  componentDidMount() {
    let urlData_1 = {
      url: 'http://projectsgono.com/medsforlife/ppi_input/ppi_input_fe/fecall.php',
      dispatchType: 'fetch_overview_stats'
    };
    let urlData_2 = {
      url: 'http://projectsgono.com/medsforlife/ppi_input/ppi_input_fe/interesting.php',
      dispatchType: 'fetch_overview_extra_stats'
    };
    let urlData_3 = {
      url: 'http://projectsgono.com/medsforlife/ppi_input/ppi_input_fe/extra_info.php',
      dispatchType: 'fetch_overview_extra_stats_added_info'
    };

    this.props.dispatch(user.asyncAll(urlData_1.url, urlData_1.dispatchType));
    this.props.dispatch(user.asyncAll(urlData_2.url, urlData_2.dispatchType));
    this.props.dispatch(user.asyncAll(urlData_3.url, urlData_3.dispatchType));
  }

  render() {
    if (this.props.overviewstat.overview && this.props.overview_extra_stat.overviewextra && this.props.overview_extra_stat.overviewextra_last_info) {
      {
        console.log(this.props.overview_extra_stat.overviewextra);
      }
      return (
        <div className="container-fluid">
          <div className="container margin-bottom-10">
            <Navbar />
          </div>
          <MuiThemeProvider>
            <Tabs value={this.state.value} onChange={this.handleChange.bind(this)}>
              <Tab label="Input Proof" value="a">
                <div>
                  <h2 style={styles.headline}>Proof od data entry</h2>
                  <div id="basic-info">
                    <TableTitle backColor="#eaeaea" title="Person basic info" />
                    <Table>
                      {func.setTableHeader(this.props.overviewstat.overview.basic_info[0])}
                      {func.setTableBody(this.props.overviewstat.overview.basic_info)}
                    </Table>
                  </div>
                  <div id="disease" className="container">
                    <TableTitle backColor="#f0e4e4" title="Condition/Disease" />
                    <Table>
                      {func.setTableHeader(this.props.overviewstat.overview.condition_overview[0])}
                      {func.setTableBody(func.checkWhenNumberChange(this.props.overviewstat.overview.condition_overview))}
                    </Table>
                  </div>
                  <div id="drugs" className="container">
                    <TableTitle backColor="#d3e6f2" title="PPI drugs" />
                    <Table>
                      {func.setTableHeader(this.props.overviewstat.overview.ppi_overview[0])}
                      {func.setTableBody(this.props.overviewstat.overview.ppi_overview)}
                    </Table>
                  </div>
                  <div id="drugs-sides" className="container">
                    <TableTitle backColor="#f8e3c4" title="PPIs side effects" />
                    <Table>
                      {func.setTableHeaderDrugSides(this.props.overviewstat.overview.side_drug[0])}
                      {func.setTableBodyDrugSides(func.checkWhenNumberChangeDrugSides(this.props.overviewstat.overview.side_drug))}
                    </Table>
                  </div>
                  <div id="sides-general" className="container">
                    <TableTitle backColor="#f8e3c4" title="General side effects" />
                    <Table>
                      {func.setTableHeader(this.props.overviewstat.overview.side_general[0])}
                      {func.setTableBody(func.checkWhenNumberChangeSideGeneral(this.props.overviewstat.overview.side_general))}
                    </Table>
                  </div>
                  <div id="other-drugs" className="container">
                    <TableTitle backColor="#f2f3f4" title="Other drugs taken (not PPIs)" />
                    <Table>
                      {func.setTableHeader(this.props.overviewstat.overview.other_drug[0])}
                      {func.setTableBody(func.checkWhenNumberChangeOtherDrugs(this.props.overviewstat.overview.other_drug))}
                    </Table>
                  </div>
                  <div id="nutrient-data" className="container">
                    <TableTitle backColor="#c4ecc4" title="Nutrient deficiency" />
                    <Table>
                      {func.setTableHeader(this.props.overviewstat.overview.nutrient[0])}
                      {func.setTableBody(func.checkWhenNumberChangeNutrient(this.props.overviewstat.overview.nutrient))}
                    </Table>
                  </div>
                  <div id="natural-data" className="container">
                    <TableTitle backColor="#b5e0b5" title="Natural supplements" />
                    <Table>
                      {func.setTableHeader(this.props.overviewstat.overview.natural[0])}
                      {func.setTableBody(func.checkWhenNumberChangeNatural(this.props.overviewstat.overview.natural))}
                    </Table>
                  </div>
                  <div id="other-data">
                    <TableTitle backColor="#eaeaea" title="Other person information" />
                    <Table>
                      {func.setTableHeader(this.props.overviewstat.overview.other_data[0])}
                      {func.setTableBody(this.props.overviewstat.overview.other_data)}
                    </Table>
                  </div>
                </div>
              </Tab>
              <Tab label="Extra stats" value="b">
                <div>
                  <h2 style={styles.headline}>Additional statistical data</h2>
                  <div id="basic-extract" className="row">
                    <TableTitle backColor="#eaeaea" title="Person basic info" overwrite="overwrite_title" />

                    <div className="col-sm-4">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra.age_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra.age_person)}
                      </Table>
                      <Explanation text="this is some text here which belongs here" />
                    </div>
                    <div className="col-sm-4">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra.race_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra.race_person)}
                      </Table>
                      <Explanation text="this is some text here which belongs here" />
                    </div>
                    <div className="col-sm-4">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra.gender_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra.gender_person)}
                      </Table>
                      <Explanation text="this is some text here which belongs here" />
                    </div>
                  </div>
                  <div id="condition-extract" className="row">
                    <TableTitle backColor="#f0e4e4" title="Condition/Disease" overwrite="overwrite_title" />
                    <div className="col-sm-4">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra.gastro_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra.gastro_person)}
                      </Table>
                      <Explanation text="this is some text here which belongs here" />
                    </div>
                    <div className="col-sm-4">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra.other_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra.other_person)}
                      </Table>
                      <Explanation text="this is some text here which belongs here" />
                    </div>
                    <div className="col-sm-4">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra.ppi_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra.ppi_person)}
                      </Table>
                      <Explanation text="this is some text here which belongs here" />
                    </div>
                  </div>
                  <div id="drugs-extract-part1" className="row">
                    <TableTitle backColor="#d3e6f2" title="PPI drugs" overwrite="overwrite_title" />
                    <div className="col-sm-4">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra.generic_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra.generic_person)}
                      </Table>
                      <Explanation text="this is some text here which belongs here" />
                    </div>
                    <div className="col-sm-4">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra.brand_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra.brand_person)}
                      </Table>
                      <Explanation text="this is some text here which belongs here" />
                    </div>
                    <div className="col-sm-4">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra.treatment_duration_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra.treatment_duration_person)}
                      </Table>
                      <Explanation text="this is some text here which belongs here" />
                    </div>
                  </div>
                  <div id="drugs-extract-part2" className="row margin-top-30">
                    <div className="col-sm-6">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra.daily_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra.daily_person)}
                      </Table>
                      <Explanation text="this is some text here which belongs here" />
                    </div>
                    <div className="col-sm-6">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra.dosage_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra.dosage_person)}
                      </Table>
                      <Explanation text="this is some text here which belongs here" />
                    </div>
                  </div>
                  <div id="sides-extract-part1" className="row">
                    <TableTitle backColor="#f8e3c4" title="PPIs side effects" overwrite="overwrite_title" />
                    <div className="col-sm-6">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra.sides_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra.sides_person)}
                      </Table>
                      <Explanation text="this is some text here which belongs here" />
                    </div>
                    <div className="col-sm-6">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra.treatment_duration_side_amount[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra.treatment_duration_side_amount)}
                      </Table>
                      <Explanation text="this is some text here which belongs here" />
                    </div>
                  </div>
                  <div id="sides-extract-part2" className="row margin-top-30">
                    <div className="col-sm-6">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra.generic_side_amount[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra.generic_side_amount)}
                      </Table>
                      <Explanation text="this is some text here which belongs here" />
                    </div>
                    <div className="col-sm-6">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra.brand_side_amount[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra.brand_side_amount)}
                      </Table>
                      <Explanation text="this is some text here which belongs here" />
                    </div>
                  </div>
                  <div id="other-nutrient-extract" className="row">
                    <TableTitle backColor="#fafafa" title="Other drugs taken (not PPIs) & Nutrient deficiency" overwrite="overwrite_title" />
                    <div className="col-sm-6">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra.other_drug[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra.other_drug)}
                      </Table>
                      <Explanation text="this is some text here which belongs here" />
                    </div>
                    <div className="col-sm-6">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra.nutrient_deficiency[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra.nutrient_deficiency)}
                      </Table>
                      <Explanation text="this is some text here which belongs here" />
                    </div>
                  </div>
                  <div id="natural-extract" className="row">
                    <TableTitle backColor="#b5e0b5" title="Natural supplements" overwrite="overwrite_title" />
                    <div className="col-sm-6">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra.natural_helped[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra.natural_helped)}
                      </Table>
                      <Explanation text="this is some text here which belongs here" />
                    </div>
                    <div className="col-sm-6">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra.natural_nothelped[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra.natural_nothelped)}
                      </Table>
                      <Explanation text="this is some text here which belongs here" />
                    </div>
                  </div>
                  <div id="extra-extract-part1" className="row">
                    <TableTitle backColor="#eaeaea" title="Other person information" overwrite="overwrite_title" />
                    <div className="col-sm-3">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra_last_info.hpylori_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra_last_info.hpylori_person)}
                      </Table>
                    </div>
                    <div className="col-sm-3">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra_last_info.exercise_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra_last_info.exercise_person)}
                      </Table>
                    </div>
                    <div className="col-sm-3">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra_last_info.smoke_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra_last_info.smoke_person)}
                      </Table>
                    </div>
                    <div className="col-sm-3">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra_last_info.alcohol_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra_last_info.alcohol_person)}
                      </Table>
                    </div>
                  </div>
                  <div id="extra-extract-part2" className="row margin-top-30">
                    <div className="col-sm-3">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra_last_info.obese_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra_last_info.obese_person)}
                      </Table>
                    </div>
                    <div className="col-sm-3">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra_last_info.healthy_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra_last_info.healthy_person)}
                      </Table>
                    </div>
                    <div className="col-sm-3">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra_last_info.stress_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra_last_info.stress_person)}
                      </Table>
                    </div>
                    <div className="col-sm-3">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra_last_info.genetic_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra_last_info.genetic_person)}
                      </Table>
                    </div>
                  </div>
                  <div id="extra-extract-part3" className="row margin-top-30">
                    <div className="col-sm-3">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra_last_info.anxiety_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra_last_info.anxiety_person)}
                      </Table>
                    </div>
                    <div className="col-sm-3">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra_last_info.substitute_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra_last_info.substitute_person)}
                      </Table>
                    </div>
                    <div className="col-sm-3">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra_last_info.off_drug_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra_last_info.off_drug_person)}
                      </Table>
                    </div>
                    <div className="col-sm-3">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra_last_info.acid_rebound_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra_last_info.acid_rebound_person)}
                      </Table>
                    </div>
                  </div>
                  <div id="extra-extract-part4" className="row margin-top-30">
                    <Table>
                      {func.setTableHeader(this.props.overview_extra_stat.overviewextra_last_info.overall_experience_person[0])}
                      {func.setTableBody(this.props.overview_extra_stat.overviewextra_last_info.overall_experience_person)}
                    </Table>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </MuiThemeProvider>
          <Navfooter />
        </div>
      );
    }
    return <div />;
  }
}
