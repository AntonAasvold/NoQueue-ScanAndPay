import { configureStore } from '@reduxjs/toolkit';
import airLiftReducer from './airLiftSlice.js';

const storeConfig =   {
  reducer: {
    airlift: airLiftReducer
  },
  devTools: true
};

export default configureStore(storeConfig);