import { createSlice } from '@reduxjs/toolkit';

const initialLoginState = {
  showLogin: true,
  user_id: localStorage.getItem('user_id'),
  user_email: localStorage.getItem('user_email'),
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialLoginState,
  reducers: {
    login(state, action) {
      state.user_id = action.payload.user_id;
      localStorage.setItem('user_id', state.user_id);
      state.user_email = action.payload.user_email;
      localStorage.setItem('user_email', state.user_email);
    },
    logout(state) {
      state.user_id = localStorage.removeItem('user_id');
      state.user_email = localStorage.removeItem('user_email');
    },
  },
});

export const userAction = userSlice.actions;

export default userSlice.reducer;
