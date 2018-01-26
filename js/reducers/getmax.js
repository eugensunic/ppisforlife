
export default function reducer (state={getFlag:false}, action){


  if(action.type==='get-max-id') {
    console.log("went to reducer function.js")
    state={...state, getLastId:parseInt(action.payload) + 1, getFlag:true};
  }
  return state;
}
