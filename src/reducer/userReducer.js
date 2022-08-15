/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const userSlicer = createSlice({
  name: 'user',
  initialState: {
    token: '',
  },
  reducers: {
    setToken: (state, action) => {
      if (!action.payload) {
        state.token = '';
      } else {
        state.token = action.payload;
      }
    },
  },
});

export const { setToken } = userSlicer.actions;
export default userSlicer.reducer;
