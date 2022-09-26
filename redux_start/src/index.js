import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from '../src/redux/store';
// import { addTodo, completeTodo, showComplete } from './redux/actions';

// store의 변경사항을 구독
// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(addTodo('할일'));
// store.dispatch(completeTodo(0));
// store.dispatch(showComplete());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
