import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from '../src/redux/store';
import { addTodo } from './redux/actions';

// store의 변경사항을 구독
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// console.log(store);
// console.log(store.getState());
// // ƒ dispatch(action)
store.dispatch(addTodo('coding'));
// console.log(store.getState());
store.dispatch(addTodo('read book'));
store.dispatch(addTodo('eat'));
// 함수 제거
unsubscribe();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
