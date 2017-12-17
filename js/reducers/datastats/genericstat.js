export default function reducer(state={name:{}}, action){
  if(action.type==="generic_stat"){

    state={...state, name:action.payload, fourth_stat:true}
  }
  else{
      // when in production then error
      // console.log("There was an error in header async ");
  }
  return state;
}
