const { createAction } = require('@reduxjs/toolkit');

const getImagesRequest = createAction('test/getImagesRequest');
const getImagesSuccess = createAction('test/getImagesSuccess');
const getImagesError = createAction('test/getImagesError');

const changeAge = createAction('test/changeAge');

const setUserData = createAction('test/setUserData');

export default {
  getImagesRequest,
  getImagesSuccess,
  getImagesError,
  changeAge,
  setUserData,
};
