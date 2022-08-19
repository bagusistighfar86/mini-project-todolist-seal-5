/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const userSlicer = createSlice({
  name: 'user',
  initialState: {
    token: '',
    refresh: false,
  },
  reducers: {
    setToken: (state, action) => {
      if (!action.payload) {
        state.token = '';
      } else {
        state.token = action.payload;
      }
    },
    setRefresh: (state, action) => {
      if (!action.payload) {
        state.refresh = false;
      } else {
        state.refresh = action.payload;
      }
    },
  },
});

export const { setToken, setRefresh } = userSlicer.actions;
export default userSlicer.reducer;
