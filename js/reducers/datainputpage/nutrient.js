export default function reducer(state={}, action){
  if(action.type==="nutrient"){
    state={...state, nutrient:action.payload}
  }
  if(action.type==="radio_nutrient"){
    state={...state, radio_nutrient:action.payload}
  }
  return state;
}
