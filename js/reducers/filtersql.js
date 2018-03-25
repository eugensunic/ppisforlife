export default function reducer(state = { filter1: false, filter2: false, filter3: false }, action) {
  if (action.type === 'post_post') {
    //uglavnom, trebas napraviti posebne reducere za sve GET akcije
    state = { ...state, post_array: action.payload, filter1: true };
  }
  if (action.type === 'data_data') {
    //console.log("DATADATA"+state.filter2);

    state = { ...state, data_array: action.payload, filter2: true };
  }
  if (action.type === 'rest_rest') {
    //console.log("RESTREST"+state.filter3);

    state = { ...state, rest_array: action.payload, filter3: true };
  } else {
    // console.log("you made a mistake");
    // console.log(action.type);
    // console.log(action.payload);
  }
  return state;
}
