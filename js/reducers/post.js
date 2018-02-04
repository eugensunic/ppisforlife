
export default function reducer (state={}, action){

  if(action.type==="post_request"){
    state={...state, post_response:action.payload}
  }

  return state;
}
