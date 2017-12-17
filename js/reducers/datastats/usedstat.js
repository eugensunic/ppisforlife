export default function reducer(state={name:{}}, action){
  if(action.type==="used_stat"){

    state={...state, name:action.payload, nineth_stat:true}
  }
  else{
      // when in production then error
      // console.log("There was an error in header async ");
  }
  return state;
}
