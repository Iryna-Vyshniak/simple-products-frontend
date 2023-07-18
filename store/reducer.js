import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { counterReducer } from './counter/counterReducer';
import { counterReducer } from './counter/counterSlice';
//  import { todoReducer } from './todo/todoReducer';
import { todoReducer } from './todo/todoSlice';
//  import { filtersReducer } from './filter/filterReducer';
import { filtersReducer } from './filter/filterSlice';
import { authReducer } from './auth/slice';
import { productsReducer } from './products/slice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'user'],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  products: productsReducer,
  counter: counterReducer,
  todo: todoReducer,
  filters: filtersReducer,
});

// or
// export const reducer = {
//   counter: counterReducer,
//   todo: todoReducer,
//   filters: filtersReducer,
// };

// const counterReducer = (state = initialState.counter, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return {
//         ...state,
//         total: state.total + action.payload,
//       };
//     case DECREMENT:
//       return {
//         ...state,
//            or
//         total: state.total - state.step,
//            or
//         total: state.total - action.payload,
//       };
//     case SETSTEP:
//       return {
//         ...state,
//         step: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// const todoReducer = (state = initialState.todo, action) => {
//   switch (action.type) {
//     case 'todo':
//       return {
//         ...state,
//         todo: state.todo + action.payload,
//       };
//     default:
//       return state;
//   }
// };
