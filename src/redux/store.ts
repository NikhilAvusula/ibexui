// store.ts

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Import your combined reducers
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

const store = configureStore({
  reducer: rootReducer, // Pass your combined reducers here
  // Add any middleware or enhancers if needed
});

// Define types for useDispatch and useSelector hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Export useDispatch and useSelector hooks with typed versions
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
