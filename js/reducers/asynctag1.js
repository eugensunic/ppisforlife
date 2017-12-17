
export default function reducer (state={name:{}}, action){
  if(action.type==="tag1"){
    state={...state, name:action.payload, second:true}
  }
  else{
      // console.log("you made a mistake");
      // console.log(action.type);
      // console.log(action.payload);
  }
  return state;
}
