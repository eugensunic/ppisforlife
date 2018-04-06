import React from 'react';
import { connect } from 'react-redux';
import * as user from '../../actions/asyncCAll.js';
import * as func from './Function.js';
import axios from 'axios';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export function setTableHeaderColumn(obj) {
  // adjust key name on backend
  return Object.keys(obj).map((key, i) => {
    return <TableHeaderColumn>{key}</TableHeaderColumn>;
  });
}

export function setTableBodyColumn(array) {
  return array.map((item, i) => {
    return (
      <TableRow>
        {Object.keys(item).map((key, i) => {
          return <TableRowColumn>{item[key]}</TableRowColumn>;
        })}
      </TableRow>
    );
  });
}

export function setTableHeader(obj) {
  return (
    <TableHeader displaySelectAll={false}>
      <TableRow>{setTableHeaderColumn(obj)}</TableRow>
    </TableHeader>
  );
}

export function setTableBody(arr, obj) {
  return <TableBody>{setTableBodyColumn(arr, obj)}</TableBody>;
}
function createEquivalentObject(obj) {
  let obj2 = {};
  for (let key in obj) {
    obj2[key] = '';
  }
  console.log('this is the new object: ' + JSON.stringify(obj2));
  return obj2;
}

// this is a test function
export function checkWhenNumberChange(array) {
  let obj_temp = { basicID: '', gastro: [], other: [], ppis: [] }; // provide as param
  let global_array = [];
  let gastro = [];
  let basic_copy;
  let flag = false;

  let obj_array = [];
  let first_entrance = true;

  if (array.length === 1) {
    global_array.push({ basicID: array[array.length - 1].basicID, gastro: array[array.length - 1].gastro, other: [], ppis: [] });
  } else {
    for (let i in array) {
      i = parseInt(i);
      // because of i+1 otherwise it can step out of the array to non-existing element
      if (i < array.length - 1) {
        // checks all continous
        if (array[i].basicID === array[i + 1].basicID) {
          flag = true;
          if (first_entrance) {
            first_entrance = false;
            gastro.push(array[i].gastro);
          }
          gastro.push(array[i + 1].gastro);
        }
        // checks all others, adds only one file
        if (array[i].basicID !== array[i + 1].basicID && !flag) {
          gastro.push(array[i].gastro);
        }
        if (array[i].basicID !== array[i + 1].basicID) {
          basic_copy = array[i].basicID;
          global_array.push({ basicID: basic_copy, gastro: gastro, other: [], ppis: [] });
          first_entrance = true;
          gastro = [];
          flag = false;
        }
      }
    }
  }
  // checking last pair of consecutives if exist because of the upper constraint which doesn't permit going inside
  if (gastro.length > 0) {
    global_array.push({ basicID: basic_copy + 1, gastro: gastro, other: [], ppis: [] });
  }
  // checking last index only, because of the upper constraint which doesn't permit going inside
  if (array[array.length - 1].basicID !== array[array.length - 2].basicID) {
    global_array.push({ basicID: array[array.length - 1].basicID, gastro: [array[array.length - 1].gastro], other: [], ppis: [] });
  }
  printArray(global_array);

  return '';
}
// testing purpose only
function printArray(array) {
  console.log('---------------');
  for (let i in array) {
    console.log(array[i]);
  }
  console.log('---------------');
}
