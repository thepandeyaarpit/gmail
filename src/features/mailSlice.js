import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const mailSlice = createSlice({
  name: 'mail',
  initialState:{
    sendMessageIsOpen : false
  },
  reducers: {
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true
    },
    closeSendMessage: (state) => {
      state.value = false;
    },
  },
});

export const { openSendMessage, closeSendMessage } = mailSlice.actions;

export const selectsendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
