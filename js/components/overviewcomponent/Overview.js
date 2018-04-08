import React from 'react';
import { connect } from 'react-redux';
import * as user from '../../actions/asyncCAll.js';
import * as func from './Function.js';
import axios from 'axios';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumnr } from 'material-ui/Table';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from '../Navbar.js';
@connect(store => {
  return {
    overviewstat: store.overviewstats
  };
})
export default class Overview extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let urlData = {
      url: 'http://projectsgono.com/medsforlife/ppi_input/ppi_input_fe/fecall.php',
      dispatchType: 'fetch_overview_stats'
    };
    this.props.dispatch(user.asyncAll(urlData.url, urlData.dispatchType));
  }

  render() {
    // database equivalents
    let disease = { basicID: '', gastro: [], other: [], ppis: [] };
    let side_drug = { basicID: '', name: [], generic: [], brand: [] };
    if (this.props.overviewstat.overview) {
      {
        console.log('in render: ' + this.props.overviewstat.overview.side_drug);
      }
      return (
        <div>
          <Navbar />
          <div id="basic-info" className="container">
            <MuiThemeProvider title="Title">
              <div>
                <AppBar />
                <Table>
                  {func.setTableHeader(this.props.overviewstat.overview.basic_info[0])}
                  {func.setTableBody(this.props.overviewstat.overview.basic_info)}
                </Table>
              </div>
            </MuiThemeProvider>
          </div>
          <div id="disease" className="container">
            <MuiThemeProvider>
              <Table>
                {func.setTableHeader(this.props.overviewstat.overview.condition_overview[0])}
                {func.setTableBody(func.checkWhenNumberChange(this.props.overviewstat.overview.condition_overview))}
              </Table>
            </MuiThemeProvider>
          </div>
          <div id="drugs" className="container">
            <MuiThemeProvider>
              <Table>
                {func.setTableHeader(this.props.overviewstat.overview.ppi_overview[0])}
                {func.setTableBody(this.props.overviewstat.overview.ppi_overview)}
              </Table>
            </MuiThemeProvider>
          </div>
          <div id="drugs-sides" className="container">
            <MuiThemeProvider>
              <Table>
                {func.setTableHeaderDrugSides(this.props.overviewstat.overview.side_drug[0])}
                {typeof this.props.overviewstat.overview.side_drug !== 'undefined'
                  ? func.setTableBodyDrugSides(func.checkWhenNumberChangeDrugSides(this.props.overviewstat.overview.side_drug))
                  : ''}
              </Table>
            </MuiThemeProvider>
          </div>
        </div>
      );
    }
    return <div />;
  }
}
