import React from 'react';
import { connect } from 'react-redux';
import * as user from '../../actions/asyncCAll.js';
import * as func from './Function.js';
import axios from 'axios';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
    if (this.props.overviewstat.overview) {
      {
        console.log(this.props.overviewstat.overview.condition_overview);
        func.checkWhenNumberChange(this.props.overviewstat.overview.condition_overview);
        c;
      }
      return (
        <div>
          <div id="basic-info" className="container">
            <MuiThemeProvider>
              <Table>
                {func.setTableHeader(this.props.overviewstat.overview.basic_info[0])}
                {func.setTableBody(this.props.overviewstat.overview.basic_info)}
              </Table>
            </MuiThemeProvider>
          </div>
          <div id="condition" className="container">
            <MuiThemeProvider>
              <Table>
                {func.setTableHeader(this.props.overviewstat.overview.basic_info[0])}
                {func.setTableBody(this.props.overviewstat.overview.basic_info)}
              </Table>
            </MuiThemeProvider>
          </div>
        </div>
      );
    }
    return <div />;
  }
}
