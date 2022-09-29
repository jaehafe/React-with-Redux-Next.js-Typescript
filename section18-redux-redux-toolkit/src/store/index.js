import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';

// Reducer에서 반환된 새로운 state를 Store라는 객체로 정리해 관리하는곳
// Store는 Redux Toolkit configureStore에 객체 형식으로 reducer를 전달하여 만들 수 있다
// 기존에 createStore와 비슷하지만, {reducer: {rootReducer}}로 만듦
// (property의 명이 반드시 reducer, 그리고 createStore와 달리, 'Thunk', 'dev tool'까지 자동을 등록)
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
