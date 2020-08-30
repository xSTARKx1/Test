import { createReducer, combineReducers } from '@reduxjs/toolkit';
import testActions from './test-actions';

const images = createReducer([], {
  [testActions.getImagesSuccess]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [testActions.getImagesError]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [testActions.getImagesRequest]: () => true,
  [testActions.getImagesSuccess]: () => false,
  [testActions.getImagesError]: () => false,
});

const userAge = createReducer(null, {
  [testActions.changeAge]: (_, { payload }) => payload,
});

const userData = createReducer(
  {},
  {
    [testActions.setUserData]: (_, { payload }) => payload,
  },
);

export default combineReducers({
  images,
  error,
  isLoading,
  userAge,
  userData,
});
