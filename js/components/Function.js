import * as user from '../actions/asyncCAll.js';
import store from '../store';

//ovo bi trebalo default
export function barChange(arg0, prop_arr, prop_next, string_change, string_send, stop_location) {
  var temp_arr = prop_arr;
  var flag_it = prop_next;
  if (!stop_location) {
    if (arg0 % 5 == 0) {
      temp_arr = [];
      temp_arr.push(arg0 - 1);
      for (var i = arg0; i <= arg0 + 5; i++) {
        temp_arr.push(i);
      }
      flag_it = true;
    } else if (arg0 === 4 && prop_next) {
      temp_arr = [];
      temp_arr = temp_arr.concat([1, 2, 3, 4, 5]);
      flag_it = false;
    } else if (arg0 === 1) {
      temp_arr = [];
      temp_arr = temp_arr.concat([1, 2, 3, 4, 5]);
      flag_it = false;
    } else if (prop_arr[1] - 1 === arg0 && arg0 !== 1) {
      temp_arr = [];
      for (var i = arg0 - 5; i <= arg0 + 1; i++) {
        temp_arr.push(i);
      }
      flag_it = true;
    }
  } else if (stop_location) {
    // REFACTOR THE ifs
    // flag_it= false represetns the first state when array is [1,2,3,4,5] all the other arrays have a value of flag_it=true
    // filter patient pharma and doctor here in if
    // backward navigation

    if (history.state != null) {
      console.log(history.state);
      console.log('could not have gone here');
      if (history.state.num <= 4) {
        console.log('should have gone hre for 1');
        temp_arr = [1, 2, 3, 4, 5];
        arg0 = history.state.num;
        flag_it = false; // because of this false
        //prop_next = false;
      } else if (checkNumberUnexport(history.state.num, temp_arr)) {
        temp_arr = makeFormulaNew(history.state.num, temp_arr);
        arg0 = history.state.num;
        flag_it = true;
      }

      //forward navigation
      if (checkHistoryForwards(history.state.num)) {
        temp_arr = makeFormula(history.state.num, 5);
        arg0 = history.state.num;
        flag_it = true;
      }
    } else {
      temp_arr = [1, 2, 3, 4, 5];
      arg0 = 1;
      flag_it = false;
    }
  }

  console.log('temp array: ' + temp_arr);
  console.log('flag_it:' + flag_it);
  console.log('arg0:' + arg0);
  store.dispatch(user.changeBarNum(arg0, string_change));
  if (string_change === 'bar_change_patient') {
    store.dispatch(user.sendBarDataPatient(string_send, temp_arr, flag_it, arg0, stop_location));
  } else if (string_change === 'bar_change_doctor') {
    store.dispatch(user.sendBarDataDoctor(string_send, temp_arr, flag_it, arg0, stop_location));
  } else if (string_change === 'bar_change_pharma') {
    store.dispatch(user.sendBarDataPharma(string_send, temp_arr, flag_it, arg0, stop_location));
  }
}

function makeFormulaNew(history_num, array) {
  if ((array[0] = 1)) {
    let array_extra = [];
    let counter1 = history_num;
    let counter2 = history_num;
    while (!(counter1 % 5 == 0)) {
      ++counter1;
    }
    while (!(counter2 % 5 == 0)) {
      --counter2;
    }
    for (let i = counter2 - 1; i <= counter1; i++) {
      array_extra.push(i);
    }
    return array_extra;
  }

  let array_new = [];
  let start_number = array[1] - 6;
  let end_number = array[1];
  for (let i = start_number; i <= end_number; i++) {
    array_new.push(i);
  }
  return array_new;
}

function makeFormula(history_num, low_end) {
  let lowest = low_end;
  let five = 5;
  let counter = 1;
  let array = [];

  while (true) {
    ++counter;
    if (history_num == lowest) {
      for (let i = five - 1; i <= 5 * counter; i++) {
        array.push(i);
      }
      break;
    }
    five += 5;
    lowest += 5;
  }
  return array;
}

function checkHistoryForwards(history_num) {
  let n = 1;
  const database_data_amount = 1300;
  let amount = Math.ceil(database_data_amount / 16 / 5);

  while (n < amount) {
    if (history_num == 5 * n) {
      return true;
    }
    ++n;
  }
  return false;
}

export function checkNumber(number_to_check, num, database_data_amount) {
  //history.state.num, 4,
  // the 1300 should be dinamic
  // patient --> 1300 currently 1207
  // pharma --> 50 currently 8
  // doctor --> 300 currently 198
  // 16 is the number for boxes, 5 is the amount of numbers in the down bar
  //database_data_amount should be 1300 for patients but you should retrieve the maximum
  const DATABASE_MAX = database_data_amount / 16; // 76
  let n = 1;
  let result = num; // 4
  while (result < DATABASE_MAX) {
    if (number_to_check == result) {
      return true;
    }
    result = num + 5 * n; //9, 14, 19, 24
    ++n;
  }
  return false;
}

function checkNumberUnexport(history_num, array) {
  return history_num <= array[0] || array[0] == 1;
}

// ti moras provjeriti kad je 9 ili manji od 9 kad je 14 ili manji od 14 jer nemora biti da ce ekipa kliknuti 14, 9 i tak to
