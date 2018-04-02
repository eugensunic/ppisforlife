export default function reducer(state = { name: {} }, action) {
  if (action.type === 'drug_generics') {
    state = { ...state, name: action.payload, data_rec: true };
  } else {
    // when in production then error
    // console.log("There was an error in header async ");
  }
  return state;
}
