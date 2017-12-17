  import * as user from "../actions/asyncCAll.js"
  import store from "../store"
  
  //ovo bi trebalo default
  export function barChange(arg0, prop_arr, prop_next, string_change, string_send){
    var temp_arr=prop_arr;
    var flag_it=prop_next;

    if (arg0 % 5 == 0){
      temp_arr=[];
      temp_arr.push(arg0-1);
      for (var i = arg0; i <= arg0+5; i++) {
        temp_arr.push(i);
      }
      flag_it=true;
    }
    else if(arg0===4 && prop_next){
      temp_arr=[];
      temp_arr=temp_arr.concat([1,2,3,4,5]);
      flag_it=false;
    }
    else if(arg0===1){
      temp_arr=[];
      temp_arr=temp_arr.concat([1,2,3,4,5]);
      flag_it=false;
    }
    else if((prop_arr[1]-1)===arg0 && arg0!==1){
      console.log("enetered here and ok");
      temp_arr=[]
      for (var i = arg0-5; i <= arg0+1; i++) {
          temp_arr.push(i);
      }
       flag_it=true;
    }
   console.log("final temp array is: "+temp_arr);
    store.dispatch(user.changeBarNum(arg0,string_change));
    if (string_change==="bar_change_patient")
    {
      store.dispatch(user.sendBarDataPatient(string_send, temp_arr, flag_it, arg0));
    }
    else if (string_change==="bar_change_doctor")
    {
      store.dispatch(user.sendBarDataDoctor(string_send, temp_arr, flag_it, arg0));
    }
    else if (string_change==="bar_change_pharma")
    {
      store.dispatch(user.sendBarDataPharma(string_send, temp_arr, flag_it, arg0));
    }
}
