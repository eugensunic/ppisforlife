
export default function reducer(state={name:{}}, action){
  if(action.type==="pharma_call_all"){

    state={...state, name:action.payload, first:true}
  }
  else{
      // when in production then error
      // console.log("There was an error in header async ");
  }
  return state;
}
