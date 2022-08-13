import store from "./stores";
import { increaseCounter, decreaseCounter } from "./stores/counter";

export const increaseCounterHandle = (value) => {
  store.dispatch(increaseCounter(value));
};

export const decreaseCounterHandle = (value) => {
  store.dispatch(decreaseCounter(value));
};
