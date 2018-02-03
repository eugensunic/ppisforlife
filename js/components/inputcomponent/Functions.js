  import store from "../../store.js"
  import axios from "axios";

  export function getRequest(url_id, dispatch_name) {
    return function(dispatch) {
      return axios.get(url_id)
        .then((response)=>{
          dispatch({type:dispatch_name, payload:response.data[0]['id'] });
      })
        .catch((err)=>{
      })
  }
}

  export function postRequest(url, ...args) {
    let params = new URLSearchParams();
    for (let i in args) {
      params.append('param_' + i, args[i]);
    }
    return axios.post(url, params)
      .then(response => {
    })
      .catch((err)=>{
    })
  }

  export function isValidString(val){
    console.log("value of input box is:"+val)
    if (val!=undefined){
      if(((val.indexOf(".")==-1) ||
      (parseInt(val) === parseInt(val, 10))) &&
      (parseInt(val)>0) && (parseInt(val)>0) || (/^[a-zA-Z0-9- ]*$/.test(val[0]) === false))
      {
        return "error_red_string";
      }

      else{
        return "input_basic";
      }
    }
    else{
      return "input_basic"
    }
  }

  export function isValidInteger(val,int_val1,int_val2){
    //console.log("val is: "+val);
    //YOU MUST INCLUDE REGEX example: 5.. can not be or 6...,4
  if (val!=undefined){
    //console.log(parseInt(val))
    if(((val.indexOf(".")==-1) ||
    (parseInt(val) === parseInt(val, 10))) &&
    (parseInt(val)>int_val1) && (parseInt(val)<=int_val2))
    {
    return "input_basic";
    }
    if (val==""){
       return "input_basic";
    }
    else{
      return "error_red";
    }
}
else{
  return "input_basic";

 }
}

  export function checkObjectDuplicate(arr,item){
    if (arr==undefined) return true;
    else
    {
      for (var i = 0; i < arr.length; i++) {
        if ((arr[i]['label']).toLowerCase().trim()==item.toLowerCase().trim()){
          return true;
        }
      }
    }
    return false;
  }

  export function capitalizeFirst(stringy) {
    stringy=stringy.toLowerCase();
    return stringy.charAt(0).toUpperCase() + stringy.slice(1);
  }

  export function updateSelect(arr,type0,state0){
    if (state0!=undefined && isValidString(state0)==="input_basic"){
      var check= checkObjectDuplicate(arr,state0);
      if(state0.trim()==="")
      {console.log(state0=="");}

      else if (arr!=undefined){
        console.log(checkObjectDuplicate(arr,state0));
        if (check===false)
        store.dispatch({type:type0, payload:arr.concat({label:capitalizeFirst(state0),value:capitalizeFirst(state0)})})
      }
      else if (arr===undefined)  {
        store.dispatch({type:type0, payload:[].concat({label:capitalizeFirst(state0),value:capitalizeFirst(state0)})})
      }
    }
  }
  export function pushToObject(array){
    var new_arr_obj={array0:[]};
    for (var i = 0; i < array.length; i++) {
        new_arr_obj.array0.push({value:array[i], label:array[i].charAt(0).toUpperCase() + array[i].slice(1)});
    }
    return new_arr_obj.array0;
  }

  export function toNativeArray(obj_arr) {
    let array = [];
    for(let key in obj_arr) {
      array.push(obj_arr[key].value);
    }
    return array;
  }

  export function objToString(obj) {
    let result_string = null;
    if (obj.hasOwnProperty('value')) {
      result_string = obj.value;
    }
    return result_string;
  }

  export function createArray(obj_value1, obj_value2, obj_value3, obj_value4) {
    let array=[];

    if (typeof obj_value1 !== 'undefined'  && obj_value1 !== null) {
      if (obj_value1.hasOwnProperty('value')) {
        array.push(obj_value1.value);
      }
      else {
        array.push(obj_value1);
      }
    }
    if (typeof obj_value2 !== 'undefined'  && obj_value2 !== null) {
      if (obj_value2.hasOwnProperty('value')) {
        array.push(obj_value2.value);
      }
      else {
        array.push(obj_value2);
      }
    }
    if (typeof obj_value3!== 'undefined'  && obj_value3 !== null) {
      if (obj_value3.hasOwnProperty('value')) {
        array.push(obj_value3.value);
      }
      else {
        array.push(obj_value3);
      }
    }
    if (typeof obj_value4 !== 'undefined'  && obj_value4 !== null) {
      if (obj_value4.hasOwnProperty('value')) {
        array.push(obj_value4.value);
      }
      else {
        array.push(obj_value4);
      }
    }

    return array;
  }
