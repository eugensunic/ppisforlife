
export default function reducer (state={getFlag:false}, action){


  if(action.type==='get-max-id') {
    console.log("Payload is:"+action.payload)
    for (let key in action.payload){console.log(action.payload[key])}
    state={...state, getLastId:action.payload, getFlag:true};
  }
  return state;
}
