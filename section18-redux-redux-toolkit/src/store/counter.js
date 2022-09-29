import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = {
  counter: 0,
  showCounter: true,
};
// createSlice으로 state의 초기값들과 action creator와 reducer를 생성해준다.
const counterSlice = createSlice({
  name: 'counter', // 해당 모듈의 이름을 작성
  initialState: initialCounterState,
  // 리듀서를 작성. 이때 해당 리듀서의 키값으로 액션함수가 자동으로 생성
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

// reducer 부분만
export default counterSlice.reducer;
