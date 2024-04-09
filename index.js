const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const RESET = "RESET";

const increaseCount = () => ({ type: INCREASE });
const decreaseCount = () => ({ type: DECREASE });
const resetCount = () => ({ type: RESET });

const initialState = {
  count: 0,
  resetCounter: 0,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return { ...state, count: state.count + 1 };
    case DECREASE:
      return { ...state, count: state.count - 1 };
    case RESET:
      return { ...state, count: 0, resetCounter: state.resetCounter + 1 };
    default:
      return state;
  }
}

const store = Redux.createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

function render() {
  document.getElementById("value").textContent = store.getState().count;
}

// Subscribe render to the store
store.subscribe(render);

// Dispatch actions based on user input
document.getElementById("increase").addEventListener("click", () => {
  store.dispatch(increaseCount());
});

document.getElementById("decrease").addEventListener("click", () => {
  store.dispatch(decreaseCount());
});

document.getElementById("reset").addEventListener("click", () => {
  store.dispatch(resetCount());
});

render();
